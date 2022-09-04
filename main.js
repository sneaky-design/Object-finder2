status = "";
input = "";
function setup(){
    canvas = createCanvas(640 , 420);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(380,380);
}

function start(){
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Detecting objects.";
    document.getElementById("input").innerHTML = input
    console.log(input)
}

function modelLoaded(){
    console.log("model Loaded");
    status = true;
}

function draw(){
    image(image, 0, 0, 640,420);
}
