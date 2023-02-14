lw=0;
rw=0;
nx =0;
ny =0;
long = 0;
function setup(){
    canvas = createCanvas(500, 500)
    canvas.position(500, 150)
    video = createCapture(VIDEO)
    video.size(500, 500)
    posenet = ml5.poseNet(video, modalloaded)
    posenet.on('pose', gotPoses)
}
function draw(){
    background('#99e8e1')
    textSize(long);
    text('AYaan', nx, ny)
}
function modalloaded(){
    console.log("posenet yay horray")
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results)
        nx = results[0].pose.nose.x;
        ny = results[0].pose.nose.y;
        lw= results[0].pose.leftWrist.x;
        rw= results[0].pose.rightWrist.x;
        long=lw-rw;
    }
}