img = "";
noseX = 0;
noseY = 0;
marioX =325;
marioY = 325;



function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
	
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas')
    instializeInSetup(mario);
	video = createCapture(VIDEO);
    video.size(800 , 400);
	video.parent('game_console');
	poseNet = ml5.poseNet(video , modelLooaded);
	poseNet.on('pose' , gotPoses);
}

function draw() {
	game()
}
function modelLooaded() {
	console.log('modelLoaded');

}
function gotPoses(results) {
	if(results.length>0) {
      console.log(results);
      noseX = results[0].pose.nose.x;
	  noseY = results[0].pose.nose.y;
	  
	}
}





