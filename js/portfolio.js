document.addEventListener("DOMContentLoaded", function () {
    const portfolioItems = [
        {
            category: "js",
            imageSrc: "assets/images/portfolio/personal-portfolio.png",
            title: "personal portfolio",
            description: "JS",
            link: "https://abdulahad.site",
            alt: "personal portfolio"
        },
        {
            category: "react-js",
            imageSrc: "assets/images/portfolio/lits-web-portal.png",
            title: "lits web portal",
            description: "REACT JS",
            link: "https://labbaikitservices.netlify.app",
            alt: "lits web portal"
        },
        {
            category: "html-css",
            imageSrc: "assets/images/portfolio/netflix-clone.png",
            title: "netflix clone",
            description: "HTML, CSS",
            link: "https://netflix-pakistan.vercel.app",
            alt: "netflix clone"
        },
        {
            category: "js",
            imageSrc: "assets/images/portfolio/jhon-portfolio.png",
            title: "jhon portfolio",
            description: "JS",
            link: "https://jhondoeportfolio.vercel.app",
            alt: "jhon portfolio"
        },
        {
            category: "js",
            imageSrc: "assets/images/portfolio/imit-quiz-app.png",
            title: "imit quiz app",
            description: "JS",
            link: "https://imit-quiz-application.vercel.app",
            alt: "imit quiz app"
        },
    ];

    const portfolioContainer = document.getElementById("portfolio-items");

    function generatePortfolioItem(item) {
        return `
            <div class="col-lg-4 col-md-6 all ${item.category}">
                <div class="portfolio_box">
                    <div class="single_portfolio">
                        <img class="img-fluid w-100 shadow" src="${item.imageSrc}" alt="${item.alt}">
                        <div class="overlay"></div>
                        <a href=${item.link} target="_blank">
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
