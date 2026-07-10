const slides = document.querySelectorAll(".slide");

let index = 0;

function changeSlide() {

    slides[index].classList.remove("active");

    index++;

    if (index == slides.length) {
        index = 0;
    }

    slides[index].classList.add("active");

}

setInterval(changeSlide, 5000);

// ssl songs
    const audioPlayer = document.getElementById("audioPlayer");

    function playSong() {
        audioPlayer.play();
    }

    function pauseSong() {
        audioPlayer.pause();
    }

    function stopSong() {
        audioPlayer.pause();
        audioPlayer.currentTime = 0;
    }


    // Optional: Play audio automatically when video starts
    const videoPlayer = document.querySelector("video");

    videoPlayer.addEventListener("play", function () {
        audioPlayer.pause();
    });

    audioPlayer.addEventListener("play", function () {
        videoPlayer.pause();
    });