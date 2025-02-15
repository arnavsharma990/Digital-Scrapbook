const texts = ["• PRESERVE MEMORIES...", "• CRAFT STORIES...", "• SHARE MOMENTS!!!"];
let index = 0;
const textElement = document.getElementById("text");
const introContainer = document.getElementById("intro");
const landingPage = document.getElementById("landing");

function typeWriterEffect(text, i, callback) {
    if (i === 0) textElement.innerHTML = ""; // Clear previous text
    if (i < text.length) {
        textElement.innerHTML += text.charAt(i);
        setTimeout(() => typeWriterEffect(text, i + 1, callback), 35); // Increased typing delay for better readability
    } else {
        setTimeout(callback, 600); // Increased delay before fading out
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
                }, 100); // Increased transition delay between texts
            }, 300); // Increased display time before fading
        });
    }
}

function transitionToLanding() {
    introContainer.style.transform = "translateY(-100px)";
    introContainer.style.opacity = "0";

    setTimeout(() => {
        landingPage.style.opacity = "1";
        landingPage.style.transform = "translateY(0)";
    }, 800); // Delay to start fade-in after rise transition
}

setTimeout(showText, 300); // Increased initial delay