var song=""; 
function preload(){
song=loadSound("my ordinary life.mp3")
}

scoreRightWrist = 0;
scoreLeftWrist = 0;

rightWristX = 0;
rightWristY = 0;

leftWristX = 0;
leftWristY = 0;

function setup(){
 canvas=createCanvas(600, 500);
 canvas.center();
 
 video = createCapture(VIDEO);
 video.hide();

 poseNet = m15.poseNet(video, modelLoaded);
 poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log('PoseNet Is Initialized');
}
function gotPoses(reults)
{
    if(results.lenght > 0)
{
scoreRightWrist = results[0].pose.keypoints[10].score;
scoreLeftWrist = results[0].pose.keypoints[10].score;

rightWristX = results[0].pose.rightWrist.x;
rightWristY = results[0].pose.rightWrist.y;

leftWristX = results[0].pose.leftWrist.x;
leftWristY = results[0].pose.lestWrist.y;
}
}

function draw() {
    image(video, 0, 0, 600, 500);
    fill("#FF0000");
    stroke("#FF0000")

    if(scoreRightWrist > 0.2){
        circle(rightWristX,rightWristY,20);
        if(rightWristY >0 && rightWristY <= 100){
            document.getElementById("speed").innerHTML = "Velocidade = 0.5x";
            song.rate(0.5);   
        }
        else if(rightWristY >100 && rightWrist <=200)
        {
document.getElementById("speed").innerHTML = "Velocidade = 1x";
song.rate(1);
    }
else if(rightWristY >200 && rightWristY <= 300)
    {
    document.getElementById("speed").innerHTML = "Velocidade = 1.5x";
song.rate(1.5);
    }
    else if(rightWristY > 300 && rightWristY <= 400)
    {
document.getElementById("speed").innerHTML = "Velocidade = 2x";
song.rate(2);
    }
    else if(rightWristY >400)
    {
document.getElementById("speed").innerHTML = "Velocidade = 2.5x";
song.rate(2.5);
    }
}
if(scoreLeftWrist > 0.2)
{
    circle(LeftWristX,LeftWristY,20);
    InNumberLeftWristY = Number(LeftWristY);
    remove_decimals = floor(InNumberLeftWristY);
    volume = remove_decimals/500;
    document.getElementById("volume").innerHTML = "Volume = " + volume;
    song.setVolume(volume);
}
}

function play();
{
    song.play();
    song.setVolume(1);
    song.rate(1);
}