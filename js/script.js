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

const pages = document.getElementById("portfolio-pages");

async function getPageData() {
    let pageData = await fetch('js/pages.json');
    let data = await pageData.json();
    let pages = data.map(o => {
        return {
            name: o.name,
            thumbnail: o.thumbnail
        }
    })
    return pages
}

const pageData = getPageData();

function translate(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s/g, "-").toLowerCase();
}

for (let i = 0; i < pageData.length; i++) {
    let page = pageData[i];
    let src = page.url;
    let name = page.name;
    let thumbnail_src = translate(name);
    let container = document.createElement("div");
    let title = document.createElement("a");
    let thumbnail = document.createElement("div");

    pages.appendChild(container);
    container.classList.add("container");
    container.appendChild("title");
    title.setAttribute("href", src);
    container.appendChild(thumbnail);
    thumbnail.classList.add("thumbnail");
    thumbnail.style.backgroundImage = `url()`

}

for (let i = 0; i < pages.length; i++) {
    let src = pages[i].firstElementChild.getAttribute("href");
    let thumbnail = document.createElement("div");
    pages[i].appendChild(thumbnail);
    thumbnail.classList.add("page-thumbnail");
    thumbnail.setAttribute("draggable", "false");
    thumbnail.addEventListener("click", () => {
        window.location = src;
    });
}