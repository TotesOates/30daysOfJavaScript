//Query Selectors
const player = document.querySelector('.player');
const video = document.querySelector('.viewer');
const progress = document.querySelector('.progress');
const progressBar = document.querySelector('.progress__filled');

const playButton = document.querySelector('.player__button');
const sliders = document.querySelectorAll(".player__slider");
const skipButton = document.querySelectorAll("button[data-skip]");

//building out functions
function togglePlay() {
    if (video.paused) {
        video.play();
        playButton.innerHTML = '| |';
    } else {
        video.pause();
        playButton.innerHTML = '►';
    }
}

function skip(){
    console.log(this.dataset);
    video.currentTime += parseFloat(this.dataset.skip);
}

function rangeUpdates(){
    video[this.name] = this.value;
}

function handleProgress(){
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e){
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}

//add eventlisteners

playButton.addEventListener('click', togglePlay);
video.addEventListener('timeupdate', handleProgress);
progress.addEventListener('click', scrub);
let mouseDown = false;
progress.addEventListener('mousemove', (e) => mouseDown && scrub(e));

progress.addEventListener('mousedown', () => mouseDown = true);
progress.addEventListener('mouseup', () => mouseDown = false);
skipButton.forEach(btn => btn.addEventListener('click', skip));
sliders.forEach(slider => slider.addEventListener('change', rangeUpdates));