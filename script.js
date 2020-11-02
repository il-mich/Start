// Counter that is incremented when the search engines are cycled through
let se = 3;

// Listens for click event in se_button, once clicked, se increments by one and cycleSearchEngines() is called to update the icon, placeholder, and form action
document.getElementById("se_button").addEventListener("click", function() {
        se++;
        cycleSearchEngines(se);
    }
);

function check_if_search_empty() {
    //Do not allow searching if the user clicks "GO" when the search box is empty
    if (document.forms["search_eng_form"]["q"].value == "") {
        event.preventDefault();
    }
};

document.getElementById("go_btn").addEventListener("click", function(){
        check_if_search_empty();
    }
);

const search_engines = [{
        src: "ddg.svg",
        placeholder: "DuckDuckGo",
        action: "https://www.duckduckgo.com/"
    }, {
        src: "goog.svg",
        placeholder: "Google",
        action: "https://www.google.com/search?q="
    }, {
        src: "reddit.svg",
        placeholder: "Reddit",
        action: "https://www.reddit.com/search?q="
    }, {
        src: "youtube.svg",
        placeholder: "YouTube",
        action: "https://www.youtube.com/results?q="
    }
];

const cycleSearchEngines = se => {
    const curData = search_engines[(se+1) % search_engines.length];

    document.getElementById("se_icon").src = "icons/" + curData.src;
    document.getElementById("search").placeholder = curData.placeholder + " search";
    document.getElementById("search_eng_form").action = curData.action;
};