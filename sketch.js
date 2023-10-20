

function setup() {
  // put setup code here
  createCanvas(800,800);
  x=400;
  y=400;

}

function draw() {
  // put drawing code here
  background(255);
  mainEllipse();
  eyesEllipse();
  pupilsEyes();
}

function mainEllipse(){
  stroke(0);
  strokeWeight(5);
  ellipse(width/2,595,400,400);
}

function eyesEllipse(){
  stroke (0);
  ellipse(470,520,60,70);
  ellipse(330,520,60,70);
}

function pupilsEyes(){
  x=map(mouseX,0,width,450,490);
  y=map(mouseY,0,height,520,560);
  stroke(0);
  strokeWeight(2);
  ellipse(470,540,30,30);
  x=map(mouseX,0,width,350,450);
  y=map(mouseY,0,height,350,450);
  ellipse(330,540,30,30);
}
