
//var can be pusehd into an array (particles.push(new Class(createvecotr(width/2,50))))
//this.particles =[]
//this.origin = this.position(copy)
//nature of code 

let option =1;

let cloudA;
let cloudB;
let cloudC;

let featherA;

let pillowA;
let pillowB;
let pillowC;
let pillowD;
let pillowE;

const feathers = new Array(30);


function setup() {
  createCanvas(800,800);
  cloudA = new Clouds (0, 80, .8,0);
  featherA = new Feathers(200,200);
  pillowA = new Pillows(100, 100,0,.01)
  pillowB = new Pillows(200, 200,0,.01)
  pillowC = new Pillows(200, 100,0,.01)
  pillowD = new Pillows(100, 50,0,.01)
  pillowE = new Pillows(400, 30,0,.01)
}

function draw() {
  if (option==1){
    background('#a2e1fa')
    mainEllipse();
    eyesEllipse();
    pupilL();
    pupilR();
    cloudA.update();
    cloudA.checkEdges();
    cloudA.display();
  }
  if (option ==2){
    background(250);
    featherA.update();
    featherA.display();
  }
  if (option ==3){
    background(250);
    pillowA.update();
    pillowA.checkEdges();
    pillowA.display();
    pillowB.update();
    pillowB.checkEdges();
    pillowB.display();
    pillowC.update();
    pillowC.checkEdges();
    pillowC.display();
    pillowD.update();
    pillowD.checkEdges();
    pillowD.display();
  }
}


function exampleB(){
  stroke(0);
  strokeWeight(10);
  ellipse(width/2,height/2,50,50);
}

function mainEllipse(){ //body of blob
  stroke(0);
  strokeWeight(5);
  fill(255);
  ellipse(width/2,595,400,400);
}

function eyesEllipse(){ //outline for the whites of the eyes
  stroke (0);
  fill(255);
  ellipse(470,520,60,70); //left eye
  ellipse(330,520,60,70); //rigth eye
}

function pupilL(){ //map for the left eye
  stroke(0);
  strokeWeight(2);
  fill(0);
  Leftx=map(mouseX,0,width,460,480);
  Lefty=map(mouseY,0,height,500,540);
  ellipse(Leftx,Lefty,30,30); //left pupil
}

function pupilR(){ //map for the right eye
  x=map(mouseX,0,width,320,350);
  y=map(mouseY,0,height,500,540);
  stroke(0);
  strokeWeight(2);
  fill(0);
  ellipse(x,y,30,30); //right pupil
}


function mousePressed() {
  option++;
  if (option>6) {
    option =1;
  }
}