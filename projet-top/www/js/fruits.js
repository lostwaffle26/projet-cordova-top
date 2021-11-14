const fruits = `
<div class="card">
    <a>
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
    const divList = document.getElementById("fruits-list");
    console.log(divList);
    json.forEach((fruit, i) => {
        const newfruits = fruits
            .replace("__src__", fruit.img)
            .replace("__top__", i + 1)
            .replace("__title__", fruit.name)
            .replace("__description__", fruit.description);
        divList.appendChild(htmlToElement(newfruits));
    });
};
document.addEventListener("DOMContentLoaded", () => {
    fetch("../api/fruit.json").then((response) =>
        response.json().then(fetchApiDone)
    );
});