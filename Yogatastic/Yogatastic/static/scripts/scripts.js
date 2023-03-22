const yogaPoses = {
    workout1: [
        { name: "Child's Pose", image: "static/img/childs_pose.jpg" },
        { name: "Cat-Cow Pose", image: "static/img/cat_cow_pose.jpg" },
        // Add more poses for workout1
    ],
    workout2: [
        { name: "Pose1", image: "static/img/pose1.jpg" },
        { name: "Pose2", image: "static/img/pose2.jpg" },
        // Add more poses for workout2
    ],
    workout3: [
        { name: "Pose1", image: "static/img/pose1.jpg" },
        { name: "Pose2", image: "static/img/pose2.jpg" },
        // Add more poses for workout2
    ],
    workout4: [
        { name: "Pose1", image: "static/img/pose1.jpg" },
        { name: "Pose2", image: "static/img/pose2.jpg" },
        // Add more poses for workout2
    ],
    workout5: [
        { name: "Pose1", image: "static/img/pose1.jpg" },
        { name: "Pose2", image: "static/img/pose2.jpg" },
        // Add more poses for workout2
    ],
};

const timerElement = document.getElementById('time');
const yogaImage = document.getElementById('yoga-image');
const workoutSelect = document.getElementById('workout-select');
const startButton = document.getElementById('start-button');

let currentPose = 0;
let timer;

function startTimer(duration, display) {
    let time = duration;
    timer = setInterval(() => {
        let minutes = parseInt(time / 60, 10);
        let seconds = parseInt(time % 60, 10);

        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;

        display.textContent = minutes + ':' + seconds;

        if (--time < 0) {
            clearInterval(timer);
            setTimeout(() => {
                nextPose();
            }, 10000); // 10-second interval for transitions
        }
    }, 1000);
}

function nextPose() {
    const selectedWorkout = workoutSelect.value;
    const poses = yogaPoses[selectedWorkout];

    if (currentPose < poses.length - 1) {
        currentPose++;
    } else {
        currentPose = 0;
    }
    yogaImage.src = poses[currentPose].image;
    yogaImage.alt = poses[currentPose].name;
    startTimer(60, timerElement); // Change to the desired duration in seconds for each pose
}

startButton.addEventListener('click', () => {
    clearInterval(timer);
    currentPose = -1; // Set to -1 to start with the first pose when the button is clicked
    nextPose();
});
