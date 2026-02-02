const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");
const question = document.getElementById("question");
const valentineImg = document.getElementById("valentineImg");
["mouseover", "touchstart"].forEach(event => {
    noBtn.addEventListener(event, () => {
        const x = Math.random() * 160 - 80;
        const y = Math.random() * 80 - 40;

        noBtn.style.transform = `translate(${x}px, ${y}px)`;
        message.textContent =
            "😏 Si tu n'arrives pas à appuyer sur NON… alors appuie sur OUI 💖";
    });
});

yesBtn.addEventListener("click", () => {
    question.textContent = "💖 Je t'aime Vanelle 💖";
    message.innerHTML = 
        "Tu viens de me rendre le plus heureux ❤️<br>" +
        "Fais un screenshot et envoie-le moi 😘";
    valentineImg.style.display = "block";
    yesBtn.style.display = "none";
    noBtn.style.display = "none";
});
