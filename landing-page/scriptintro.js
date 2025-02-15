const texts = ["• PRESERVE MEMORIES...", "• CRAFT STORIES...", "• SHARE MOMENTS!!!"];
let index = 0;
const textElement = document.getElementById("text");
const introContainer = document.getElementById("intro");
const landingPage = document.getElementById("landing");

function typeWriterEffect(text, i, callback) {
    if (i === 0) textElement.innerHTML = ""; 
    if (i < text.length) {
        textElement.innerHTML += text.charAt(i);
        setTimeout(() => typeWriterEffect(text, i + 1, callback), 35); 
    } else {
        setTimeout(callback, 600);
    }
}

function showText() {
    if (index < texts.length) {
        textElement.innerHTML = "";
        typeWriterEffect(texts[index], 0, () => {
            setTimeout(() => {
                textElement.style.opacity = "0";
                setTimeout(() => {
                    index++;
                    if (index < texts.length) {
                        textElement.style.opacity = "1";
                        showText();
                    } else {
                        transitionToLanding();
                    }
                }, 100); 
            }, 300); 
        });
    }
}

function transitionToLanding() {
    introContainer.style.transform = "translateY(-100px)";
    introContainer.style.opacity = "0";

    setTimeout(() => {
        landingPage.style.opacity = "1";
        landingPage.style.transform = "translateY(0)";
    }, 800); 
}

setTimeout(showText, 300); 