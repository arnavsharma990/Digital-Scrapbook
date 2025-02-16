function showTextInput() {
    console.log("Show Text Input function called"); // Debugging
    document.getElementById("textInputContainer").style.display = "block";
}
function redirect(element) {
    let text = element.getAttribute("data-title"); // Get template name
    let heading = document.querySelector(".heading"); // Select first heading
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
            document.getElementById("canvas").appendChild(img);
        };

        reader.readAsDataURL(file);
    }
}

function addEmoji() {
    let emojiSelector = document.getElementById("emojiSelector");
    let selectedEmoji = emojiSelector.value;
    let emoji = document.createElement("p");
    emoji.style.textAlign="center"
    emoji.classList.add("element");
    emoji.textContent = selectedEmoji;
    document.getElementById("canvas").appendChild(emoji);
}
