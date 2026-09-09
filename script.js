const video = document.getElementById("introVideo");
const button = document.getElementById("playIntro");

button.addEventListener("click", () => {

    if (video.paused) {

        video.muted = false;
        video.play();

        button.textContent = "❚❚ Pausar introducción";

    } else {

        video.pause();

        button.textContent = "▶ Reproducir introducción";

    }

});