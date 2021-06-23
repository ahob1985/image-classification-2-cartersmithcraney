// Author:

// Global UI Variables
let canvasDiv;
let canvas;
let textDiv;
let textP;
let buttonDiv;
let uploadButton;
let submitButton;
let resetButton;
// Global ML Variables 
let mobilenet;
let img;


function setup() {
canvasDiv = createDiv(); 
canvas = createCanvas(640, 480);
canvas.parent(canvasDiv);
textDiv = createDiv();
textP = createP("Model loading, please wait...");
textP.parent(textDiv); 
buttonDiv = createDiv();
uploadButton = createFileInput(handleFile);
uploadButton.parent(buttonDiv);
uploadButton.style("display", "none");
submitButton = createButton("SUBMIT");
submitButton.parent(buttonDiv);
submitButton.mousePressed(predictImage);
submitButton.style("display", "none");
resetButton = createButton("RESET");
resetButton.parent(buttonDiv);
resetButton.mousePressed(resetCanvas);
resetButton.style("display", "none"); 
mobilenet = ml5.imageClassifier("MobileNet", modelReady);
}

function draw() {

}

function modelReady() {

}

function resetCanvas() {

}

function handleFile(file) {
  if(file.type === "image") {
    img = loadImage(file.data, imageReady);
  } else {
    img = null;
  }
}

function imageReady() {

}

function predictImage() {

}

function gotResults(error, results) {

}
