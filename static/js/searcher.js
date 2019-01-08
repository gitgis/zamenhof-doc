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

            var main = document.querySelector("body > main");

            main.innerHTML = "<div class='search-results container'><div class='col-md-6 col-md-6 col-xs-12 offset-md-3 offset-sm-3'><h1>Search Results</h1><p></p><ul></ul></div></div>";

            results.forEach((function (result) {
                var liElem = document.createElement("li");
                var aElem = document.createElement("a");
                liElem.appendChild(aElem);
                aElem.href = "/docs/"+result.ref;
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

