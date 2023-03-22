const yogaImages = [
    'img/pose1.jpg',
    'img/pose2.jpg',
    'img/pose3.jpg',
    // Add more images as needed
];

const yogaImage = document.getElementById('yoga-image');
const timerElement = document.getElementById('time');
const startButton = document.getElementById('start-button');
let currentPose = 0;
let timer;

function startTimer(duration, display) {
    let time = duration;
    timer = setInterval(() => {
        let minutes = parseInt(time / 60, 10);
        let seconds = parseInt(time % 60, 10);

        minutes = minutes < 10 ? '0' + minutes : minutes
        seconds = seconds < 10 ? '0' + seconds : seconds;

        display.textContent = minutes + ':' + seconds;

        if (--time < 0) {
            clearInterval(timer);
            nextPose();
        }
    }, 1000);
}

function nextPose() {
    if (currentPose < yogaImages.length - 1) {
        currentPose++;
    } else {
        currentPose = 0;
    }
    yogaImage.src = yogaImages[currentPose];
    startTimer(30, timerElement); // Change 30 to the desired duration in seconds for each pose
}

startButton.addEventListener('click', () => {
    clearInterval(timer);
    nextPose();
});
