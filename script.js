function showTextInput() {
    console.log("Show Text Input function called");
    document.getElementById("textInputContainer").style.display = "block";
}

function redirect(element) {
    let text = element.getAttribute("data-title");
    let heading = document.querySelector(".heading");
    if (heading) {
        heading.textContent = text;
    }
}

function addText() {
    let inputText = document.getElementById("textInput").value;
    let text = document.createElement("p");
    text.classList.add("element");
    text.textContent = inputText;
    document.getElementById("canvas").appendChild(text);
    document.getElementById("textInput").value = "";
    document.getElementById("textInputContainer").style.display = "none";
}

function addImage(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            let img = document.createElement("img");
            img.src = e.target.result;
            img.style.maxWidth = "50vw";
            img.style.maxHeight = "50vh";
            img.style.margin = "5px";
            img.classList.add("draggable");
            document.getElementById("canvas").appendChild(img);
        };
        reader.readAsDataURL(file);
    }
}

function addEmoji() {
    let emojiSelector = document.getElementById("emojiSelector");
    let selectedEmoji = emojiSelector.value;
    let emoji = document.createElement("p");
    emoji.style.textAlign = "center";
    emoji.classList.add("element");
    emoji.textContent = selectedEmoji;
    document.getElementById("canvas").appendChild(emoji);
}

// Drag and Drop Feature
const canvas = document.getElementById("canvas");

canvas.addEventListener("dragover", (event) => {
    event.preventDefault();
    canvas.classList.add("drag-over");
});

canvas.addEventListener("dragleave", () => {
    canvas.classList.remove("drag-over");
});

canvas.addEventListener("drop", (event) => {
    event.preventDefault();
    canvas.classList.remove("drag-over");

    const file = event.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onload = function (e) {
            let img = document.createElement("img");
            img.src = e.target.result;
            img.style.maxWidth = "50vw";
            img.style.maxHeight = "50vh";
            img.style.margin = "5px";
            img.classList.add("draggable");
            canvas.appendChild(img);
        };
        reader.readAsDataURL(file);
    }
});

