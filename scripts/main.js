let image = document.querySelector("img");

image.onclick = () => {
    let src = image.getAttribute("src");
    if (src === "../images/Tux.png") {
        image.setAttribute("src", "../images/Torvalds.png");
    } else {
        image.setAttribute("src", "../images/Tux.png");
    }
}

let button = document.querySelector("button");
let heading = document.querySelector("h1");

function setUserName() {
    let name = prompt("Enter your name.");
    if (!name) {
        setUserName();
    } else {
        localStorage.setItem("name", name);
        heading.textContent = "Tux greets you, " + name;
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    let storedName = localStorage.getItem("name");
    heading.textContent = "Tux greets you, " + storedName;
}

button.onclick = () => {
    setUserName();
}
