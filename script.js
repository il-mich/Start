// Convert to rgb base colors
rgb_base_color = [];
for (i = 0; i < 3; i++)
    rgb_base_color.push(parseInt(base_color.substr(1 + i * 2, 2), 16));

const form = document.getElementById("search_bar"),
    logo = document.getElementById("search_logo"),
    input = document.getElementById("search_input");

change_engine(search_engines[0]);

var c = 0;
document.getElementById("search_switch").addEventListener("click", () => {
    console.log("ciao")
    c = (c + 1) % search_engines.length;
    change_engine(search_engines[c]);
});

function change_engine(search_engine) {
    form.action = search_engine.action;
    input.setAttribute("placeholder", `${search_engine.placeholder} search`);
    logo.src = `icons/${search_engine.src}`;
    document.body.style.backgroundColor = merge_colors(search_engine.accent);
}

// A merge oriented towards the base color
function merge_colors(hex) {
    var merge = [];
    for (i = 0; i < 3; i++) {
        color = parseInt(hex.substr(1 + i * 2, 2), 16);
        merge.push((color + rgb_base_color[i] + rgb_base_color[i]) / 3);
    }

    return `rgba(${merge.join(', ')})`;
}