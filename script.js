const search_engines = [{
        src: "ddg.svg",
        placeholder: "DuckDuckGo",
        action: "https://www.duckduckgo.com/"
    }, {
        src: "goog.svg",
        placeholder: "Google",
        action: "https://www.google.com/search"
    }, {
        src: "reddit.svg",
        placeholder: "Reddit",
        action: "https://www.reddit.com/search"
    }, {
        src: "youtube.svg",
        placeholder: "YouTube",
        action: "https://www.youtube.com/results"
    }],
    form = document.getElementById("search"),
    logo = document.getElementById("search_logo"),
    input = document.getElementById("search_input");

function change_engine(search_engine) {
    input.setAttribute("placeholder", `${search_engine.placeholder} search`);
    logo.src = `icons/${search_engine.src}`;
    form.action = search_engine.action;
}

var c = 0;
document.getElementById("search_switch").addEventListener("click", () => {
    c = (c + 1) % search_engines.length;
    change_engine(search_engines[c]);
});