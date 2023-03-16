

const btn = document.querySelector(".btn");
const video = document.querySelector(".background-video");
const playPause = document.querySelector(".fa-solid");
const preloader = document.querySelector(".preloader");

btn.addEventListener("click", () => {
    if (btn.classList.contains("pause")) {
        btn.classList.remove("pause");
        video.play();
        playPause.classList.add("fa-pause");
        playPause.classList.remove("fa-play");
    } else {    
        btn.classList.add("pause");
        video.pause();
        playPause.classList.add("fa-play");
        playPause.classList.remove("fa-pause");
    }
});

window.addEventListener("load", () => {
    preloader.style.zIndex = "-2";
})