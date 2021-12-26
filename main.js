eyeX=0;
eyeY=0;

function preload(){
    gogle_eye = loadImage('Eye_filter 2.jpeg');
}

function setup() {
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)
}

function modelLoaded(){
    console.log('PoseNet is Initialized');
}

function gotPoses(results){
 if(results.length > 0)
{
    console.log(results);
    eyeX =  results[0].pose.eye.x-15;
    eyeY =  results[0].pose.eye.y-15;
    console.log("eye x = " + eyeX);
    console.log("eye y = " + eyeY);
}
}

function draw() {
    image(video, 0, 0, 500, 300);
    image(gogle_eye, eyeX, eyeY, 50, 50);
}

function take_snapshot(){
    save('myGogleEye.png')
}