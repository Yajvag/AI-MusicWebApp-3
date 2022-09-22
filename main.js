song1 = "";
song2 = "";

song1_status = "";
song2_status = "";

scoreRightWrist = 0;
scoreLeftWrist = 0;

rightWristX = 0;
rightWristY = 0;

leftWristX = 0;
leftWristY = 0;

function preload() {
    song1 = loadSound("music.mp3");
    song2 = loadSound("music2.mp3");
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.position(650, 240);

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
}

function modelLoaded() {
    console.log("PoseNet is Initialized");
}

function play() {
    song.play();
    song.setVolume(1);
    song.rate(1);
}

function draw() {
    image(video, 0, 0, 600, 500);
}