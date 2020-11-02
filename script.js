const form = document.getElementById("search"),
    logo = document.getElementById("search_logo"),
    input = document.getElementById("search_input");

var c = 0;
document.getElementById("search_switch").addEventListener("click", () => {
    c = (c + 1) % search_engines.length;
    change_engine(search_engines[c]);
});

function change_engine(search_engine) {
    input.setAttribute("placeholder", `${search_engine.placeholder} search`);
    logo.src = `icons/${search_engine.src}`;
    form.action = search_engine.action;
}

