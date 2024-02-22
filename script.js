// Loading
window.addEventListener("load", () => {
    var container = document.getElementById("loading");
    container.classList = "end-loading"
})
// For Animate Header paragraph

const text = document.querySelector('.animate');
const strText = text.textContent;
const splitText = strText.split("");
text.textContent = "";

for (let i = 0; i < splitText.length; i++) {
    text.innerHTML += "<span>" + splitText[i] + "</span>";
}
let char = 0;
let timer = setInterval(onTick, 100);

function onTick() {
    const span = text.querySelectorAll('span')[char];
    span.classList.add('fade');
    char++
    if (char === splitText.length) {
        complete();
        return;
    }
}
function complete() {
    clearInterval(timer);
    timer = null;
}
// -------------------------------
function commingSoon() {
    Swal.fire(
        'Comming Soon',
        'We are Working on this field',
        'question'
    )
}
// For Modals
const btns = document.querySelectorAll("[data-target]");
const close_btn = document.querySelectorAll(".modal-close")
btns.forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelector(btn.dataset.target).classList.add('active');
    })
})
close_btn.forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelector(btn.dataset.target).classList.remove('active');
    })
})

//For video player

const video = document.getElementById('main-video');
const play = document.getElementById('playBtn');
const range = document.getElementById('rangeArea');
const mute = document.getElementById('muteBtn');
const volume = document.getElementById('volumeArea');

play.addEventListener('click', function () {
    if (video.paused) {
        video.play();
        play.innerHTML = '<i class="fa fa-pause"></i>';
    }
    else {
        video.pause();
        play.innerHTML = '<i class="fa fa-pause"></i>';
    }
});

video.addEventListener('timeupdate', function () {
    const progress = (video.currentTime / video.duration) * 100;
    range.value = progress;
});
range.addEventListener('input', function () {
    const time = (range.value / 100) * video.duration;
    video.currentTime = time;
});

mute.addEventListener('click', function () {
    if (video.muted) {
        video.muted = false;
        mute.innerHTML.remove = '<i class="fa fa-volume-up"></i>';
        volume.value = video.volume;
    }
    else {
        video.muted = true;
        mute.innerHTML.add = '<i class="fa fa-volume-off"></i>';
        volume.value = 0;
    }
});

volume.addEventListener('input', function () {
    video.volume = volume.value;
    if (volume.value > 0) {
        video.muted = false;
        mute.innerHTML.remove = '<i class="fa fa-volume-up"></i>';
    }
    else {
        video.muted = true;
        mute.innerHTML = '<i class="fa fa-volume-off"></i>';
    }
})