sound1="";
sound2="";
lefty ="";
leftx = "";
rightx = "";
righty = "";

function setup(){
    canvas = createCanvas(500 , 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video , modalLoaded);
    poseNet.on("pose" , gotPoses);

}

function draw(){
   image( video , 0 , 0 , 500 , 400);

}

function preload(){
 sound=loadSound("music.mp3");
 sound=loadSound("song.mp3");

}

function play(){
    sound.play();

}

function stop(){
    sound.stop();

}


function pause(){
    sound.pause();
    
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        leftx = results[0].pose.leftWrist.x;
        lefty = results[0].pose.leftWrist.y;

        console.log( "left Wrist X = " + leftx + " left wrist y = " + lefty);

        rightx = results[0].pose.rightWrist.x;
        righty = results[0].pose.rightWrist.y;

        console.log( "right Wrist X = " + rightx + " right wrist y = " + righty);
    }
}
function modalLoaded(){
    console.log("poseNet is started");
}