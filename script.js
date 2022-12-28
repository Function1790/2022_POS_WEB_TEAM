const nav_shortcuts = document.getElementsByClassName("shortcut")
const nav_shortcut_viwer = document.getElementsByClassName("shortcut_viewer")[0]
const body = document.getElementsByTagName("body")[0]
const next_index_follower_a = document.getElementById("next-index-follower-a")
const head_h1 = document.getElementById("head-h1")
const head_h2 = document.getElementById("head-h2")
const image_game = document.getElementById("image-game")
const viwer_disapper_count = 5

const print = (t) => console.log(t)

const HEIGHT = body.scrollHeight
const BG_INCR = 1 / HEIGHT

let is_hover_shortcut_viwer = false
let shortcut_viewer_brightness = 0
let current_h1_num = 0

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

const H1_LIST = [
    "title",
    "description",
    "team-web",
    "team-robot",
    "team-game",
    "team-security",
    "team-software",
    "roadmap"
]

nav_shortcut_viwer.addEventListener("mouseenter", () => {
    nav_shortcut_viwer.style.color = "#FFFFFF"
})


//Function
function changeByScroll() {
    let a = window.scrollY / HEIGHT * 50
}

let game_index = 0
let render_frame = 0

function render() {
    nav_shortcut_viwer.style.color = `rgba(255,255,255,${shortcut_viewer_brightness})`

    //game image
    if (render_frame % 300 == 0) {
        image_game.src = `./img/Game0${game_index % 4 + 1}.png`
        game_index++
    }

    shortcut_viewer_brightness -= 0.01
    render_frame++
    requestAnimationFrame(render)
}
render()

function sleep(t) {
    return new Promise(resolve => setTimeout(resolve, t));
}

//Event Function

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

//next index follower
next_index_follower_a.addEventListener("mousedown", (e) => {
    let next_index = current_h1_num + 1
    if (current_h1_num == H1_LIST.length - 1) {
        next_index = 0
    }
    next_index_follower_a.href = `#${H1_LIST[next_index]}`
})

//Scroll
document.addEventListener('scroll', e => {
    changeByScroll()

    let page_num = Math.round(window.scrollY / window.innerHeight - 0.2)
    shortcut_viewer_brightness = viwer_disapper_count
    nav_shortcut_viwer.innerHTML = PAGE_LIST[page_num]

    nav_shortcuts[page_num].style.backgroundColor = "#FFFFFF"
    nav_shortcuts[page_num].className = "shortcut shortcut_seleted"
    current_h1_num = page_num
    if (page_num > 0) {
        nav_shortcuts[page_num - 1].style.backgroundColor = "rgba(0,0,0,0)"
        nav_shortcuts[page_num - 1].className = "shortcut"
    }
    if (page_num < nav_shortcuts.length - 1) {
        nav_shortcuts[page_num + 1].style.backgroundColor = "rgba(0,0,0,0)"
        nav_shortcuts[page_num + 1].className = "shortcut"
    }
})

window.onload = (e) => {
    //logo
    const _logo = "POS"
    const _description = "Programing_Of_Soul"
    head_h1.innerText = "";
    head_h2.innerText = "";
    (async function () {
        await sleep(1000)
        for (var i = 0; i < _logo.length; i++) {
            await sleep(100)
            head_h1.innerText = _logo.slice(0, i + 1)
        }
        await sleep(1000)
        print(`${_description.slice(0, 18).replaceAll("_", "br")}`)
        for (var i = 0; i < _description.length; i++) {
            await sleep(100)
            head_h2.innerHTML = _description.slice(0, i + 1).replaceAll("_", "<br/>")
        }
    })()
}