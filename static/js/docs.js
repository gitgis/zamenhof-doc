(function () {

    function scaleEmbeds() {
        var embeds = document.querySelectorAll('.docs-embed')
        embeds.forEach(function (embed) {
            var width = embed.getAttribute('data-width');
            var height = embed.getAttribute('data-height');
            if (width > 0 && height > 0) {
                embed.style.height = (height * embed.clientWidth / width) + 'px';
            }
        })
    }

    window.addEventListener("resize", function () {
        scaleEmbeds();
    });

    window.addEventListener("load", function() {
        scaleEmbeds();
    });

})();


(function () {

    function addAnchor(element) {
        element.innerHTML = `${element.innerText} <a href="#${element.id}"><i class="fas fa-link"></i></a>`
        element.classList.add('docs-header--anchor');
    }

    window.addEventListener("load", function() {
        var headers = document.querySelectorAll('.docs-page h1, .docs-page h2, .docs-page h3, .docs-page h4');
        if (headers) {
            headers.forEach(addAnchor)
        }
    });

})();
