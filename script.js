const PAGE_LIST = [
    "POS",
    "INTRODUCTION",
    "WEB TEAM",
    "ROBOT TEAM",
    "GAME TEAM",
    "SECURITY TAEM",
    "SOFTWARE TEAM",
    "ROAD MAP"
]

const nav_shortcuts = document.getElementsByClassName("shortcut")
const nav_shortcut_viwer = document.getElementsByClassName("shortcut_viewer")[0]
const viwer_disapper_count = 5

let is_hover_shortcut_viwer = false
let shortcut_viewer_brightness = 0

nav_shortcut_viwer.addEventListener("mouseenter", () => {
    nav_shortcut_viwer.style.color = "#FFFFFF"
})

function render() {
    nav_shortcut_viwer.style.color = `rgba(255,255,255,${shortcut_viewer_brightness})`
        
    
    shortcut_viewer_brightness -= 0.01
    requestAnimationFrame(render)
}
render()

//Event

//Shortcut Viewer
nav_shortcut_viwer.addEventListener("mouseenter", () => {
    shortcut_viewer_brightness = viwer_disapper_count
})

//Shortcut
for (var i = 0; i < nav_shortcuts.length; i++) {
    nav_shortcuts[i].addEventListener("mouseenter", (e) => {
        shortcut_viewer_brightness = viwer_disapper_count
        var target = e.target;
        if (target.className == "shortcut") {
            target.style.backgroundColor = "rgba(255,255,255,0.3)"
        }
    })

    nav_shortcuts[i].addEventListener("mouseleave", (e) => {
        var target = e.target;
        if (target.className == "shortcut") {
            target.style.backgroundColor = "rgba(0,0,0,0)"
        }
    })
}

//Scroll
document.addEventListener('scroll', e => {
    let page_num = Math.round(window.scrollY / window.innerHeight - 0.2)
    shortcut_viewer_brightness = viwer_disapper_count
    nav_shortcut_viwer.innerHTML = PAGE_LIST[page_num]

    nav_shortcuts[page_num].style.backgroundColor = "#FFFFFF"
    nav_shortcuts[page_num].className = "shortcut shortcut_seleted"
    if (page_num > 0) {
        nav_shortcuts[page_num - 1].style.backgroundColor = "rgba(0,0,0,0)"
        nav_shortcuts[page_num - 1].className = "shortcut"
    }
    if (page_num < nav_shortcuts.length - 1) {
        nav_shortcuts[page_num + 1].style.backgroundColor = "rgba(0,0,0,0)"
        nav_shortcuts[page_num + 1].className = "shortcut"
    }
})