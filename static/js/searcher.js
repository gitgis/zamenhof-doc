(function () {

    var index;
    var documents;

    function loadIndex() {
        if (index) {
            return Promise.resolve(index);
        }

        return fetch("/lunr.json")
            .then(function (response) {
                return response.json()
                    .then(function (docs) {
                        documents = docs
                        // console.log(documents);

                        index = lunr(function () {
                            this.ref('uri');
                            this.field('title');
                            this.field('content');
                            this.metadataWhitelist = ['position']

                            documents.forEach(function (doc) {
                                this.add(doc)
                            }, this)
                        });

                        return index;
                    })
            })
            .catch(function (err) {
                console.error(err);
            });
    }



    function performSearch(q) {
        loadIndex().then(function (index) {
            var results = index.search(q);
            results = results.map(function (result) {
                var doc = documents.find(function (doc) {return doc.uri == result.ref});
                return Object.assign({}, result, {
                    title: doc ? doc.title : result.ref
                })
            });

            console.log(results);

            var toc = document.querySelector("body > main .docs-toc")
            if (toc) toc.innerHTML = '';
            var main = document.querySelector("body > main .docs-content");

            // main.innerHTML = "<div class='search-results container-fluid'><div class='col-sm-3'></div>" +
            //     "<div class='col'><h1>Search Results</h1><p></p><ul></ul></div></div>";
            // main.innerHTML = "<div class='search-results row'><div class='col-sm-3 docs-left-column'></div>" +
            //     "<div class='col docs-content'><h1>Search Results</h1><p></p><ul></ul></div></div>";
            main.innerHTML = "<h1>Search Results</h1><p></p><ul></ul>";

            results.forEach((function (result) {
                var liElem = document.createElement("li");
                var aElem = document.createElement("a");
                liElem.appendChild(aElem);
                aElem.href = "/docs/"+result.ref.replace(/\/_index$/, '');
                aElem.innerText = result.title;

                main.querySelector("ul").appendChild(liElem);
            }));

            main.querySelector("p").innerHTML = "Found: "+(+results.length)+" results";
        })
    }

    window.addEventListener("load", function() {

        var forms = document.querySelectorAll(".search-form")
        forms.forEach(function (form) {
            form.addEventListener("submit", function () {
                if (form.elements["q"].value) {
                    performSearch(form.elements["q"].value)
                }
            });
            console.log(form);
        })


    });



})();

