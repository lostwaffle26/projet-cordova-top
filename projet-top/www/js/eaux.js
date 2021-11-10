const eaux = `
<div class="card">
    <a href="__link__" target="_blank">
    <div>
    <img class="img-card" src="__src__" />
    <div class="container">
        <h2 class="title-card"><b>__top__. __title__</b></h2>
        <p class="desc-card">
            __description__
        </p>
    </div>
    </div>
    </a>
</div>
`;

const htmlToElement = (html) => {
    const template = document.createElement("template");
    html = html.trim(); // Never return a text node of whitespace as the result
    template.innerHTML = html;
    return template.content.firstChild;
};


const fetchApiDone = (json) => {
    const divList = document.getElementById("water-list");
    console.log(divList);
    json.forEach((eau, i) => {
        const newEaux = eaux
            .replace("__link__", eau.link)
            .replace("__src__", eau.img)
            .replace("__top__", i + 1)
            .replace("__title__", eau.name)
            .replace("__description__", eau.description);
        divList.appendChild(htmlToElement(newEaux));
    });
};
document.addEventListener("DOMContentLoaded", () => {
    fetch("../api/eau.json").then((response) =>
        response.json().then(fetchApiDone)
    );
});