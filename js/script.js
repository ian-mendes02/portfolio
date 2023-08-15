const slider = document.querySelectorAll('[data-theme-toggle="container"]');

let theme = localStorage.getItem("theme");
document.body.setAttribute("data-theme", theme);
function setTheme(slider) {
    slider.addEventListener('click', () => {
        if (document.body.getAttribute('data-theme') === 'light') {
            document.body.setAttribute('data-theme', 'dark');
            localStorage.setItem("theme", "dark");
        } else {
            document.body.setAttribute('data-theme', 'light');
            localStorage.setItem("theme", "light");
        }
        slider.classList.toggle('toggle');
    });
}
slider.forEach(slider => setTheme(slider));

function getPageData() {
    fetch('js/pages.json')
        .then((res) => res.json())
        .then((data) => makeBoxes(data));
}

document.onload = getPageData();



const pages = document.getElementById("portfolio-pages");

function translate(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s/g, "-").toLowerCase();
}

function makeBoxes(pageData) {
    for (let i = 0; i < pageData.length; i++) {
        let container = document.createElement("div");
        let page = pageData[i];
        let src = page.url;
        let name = page.name;
        let thumbnail_src = translate(name);
        let title = document.createElement("a");
        let thumbnail = document.createElement("div");
        pages.appendChild(container);
        container.classList.add("container");
        container.appendChild(title);
        container.appendChild(thumbnail);
        title.setAttribute("href", src);
        title.innerHTML = name;
        thumbnail.classList.add("thumbnail");
        thumbnail.style.backgroundImage = `url(https://github.com/ian-mendes02/portfolio/blob/main/img/page_thumbnails/${thumbnail_src}.png?raw=true)`;
        thumbnail.addEventListener("click", () => document.location = src);
    }
}

