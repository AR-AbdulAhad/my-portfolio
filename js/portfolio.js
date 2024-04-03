document.addEventListener("DOMContentLoaded", function () {
    const portfolioItems = [
        {
            category: "js",
            imageSrc: "img/portfolio/p10.png",
            title: "personal portfolio",
            description: "JS",
            link: "https://google.com"
        },
        {
            category: "react-js",
            imageSrc: "img/portfolio/p11.png",
            title: "lits web portal",
            description: "REACT JS",
            link: "https://facebook.com"
        },
        {
            category: "html-css",
            imageSrc: "img/portfolio/p12.png",
            title: "netflix clone",
            description: "HTML, CSS",
            link: "https://bolo.com"
        },
        {
            category: "js",
            imageSrc: "img/portfolio/p13.png",
            title: "jhon portfolio",
            description: "JS",
            link: "https://js.com"
        },
        {
            category: "js",
            imageSrc: "img/portfolio/p14.png",
            title: "imit quiz app",
            description: "JS",
            link: "https://js.com"
        },
    ];

    const portfolioContainer = document.getElementById("portfolio-items");

    function generatePortfolioItem(item) {
        return `
            <div class="col-lg-4 col-md-6 all ${item.category}">
                <div class="portfolio_box">
                    <div class="single_portfolio">
                        <img class="img-fluid w-100 shadow" src="${item.imageSrc}" alt="">
                        <div class="overlay"></div>
                        <a href=${item.link}>
                            <div class="icon">
                                <span class="fa fa-eye"></span>
                            </div>
                        </a>
                    </div>
                    <div class="short_info">
                        <h4>${item.title}</h4>
                        <p>${item.description}</p>
                    </div>
                </div>
            </div>
        `;
    }

    function renderPortfolioItems() {
        let html = "";
        portfolioItems.forEach(item => {
            html += generatePortfolioItem(item);
        });
        portfolioContainer.innerHTML = html;
    }

    renderPortfolioItems();
});
