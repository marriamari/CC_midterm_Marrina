
let option =1;

let cloudA;
let cloudB;
let cloudC;
let cloudD;

let teddyBears;

let pillowA;
let pillowB;
let pillowC;
let pillowD;
let pillowE;
let pillowF;
let pillowG;
let pillowH;
let pillowI;
let pillowJ;
let pillowK;
let pillowL;

function setup() {
  createCanvas(800,800);
  cloudA = new Clouds (0, 60, .8,0);
  cloudB= new Clouds (400,100,.8,0);
  cloudC=new Clouds (700,190,.8,0);
  cloudD=new Clouds(600,250, .8,0);
  teddyBears = new Teddy(200,200);
  pillowA = new Feathers(100, 100,0,.01)
  pillowB = new Feathers(200, 200,0,.01)
  pillowC = new Feathers(200, 100,0,.01)
  pillowD = new Feathers(100, 50,0,.01)
  pillowE = new Feathers(400, 30,0,.01)
  pillowF = new Feathers(500, 80,0,.01)
  pillowG = new Feathers(600, 200,0,.01)
  pillowH = new Feathers(800, 400,0,.01)
  pillowI = new Feathers(700, 800,0,.01)
  pillowJ = new Feathers(400, 700,0,.01)
  pillowK = new Feathers(650, 300,0,.01)
  pillowL = new Feathers(750, 550,0,.01)

}

function draw() {
  if (option==1){ //little blob watching fluffy clouds
    background('#a2e1fa')
    mainEllipse();
    eyesEllipse();
    pupilL();
    pupilR();
    cloudA.update();
    cloudA.checkEdges();
    cloudA.display();
    cloudB.update();
    cloudB.checkEdges();
    cloudB.display();
    cloudC.update();
    cloudC.checkEdges();
    cloudC.display();
    cloudD.update();
    cloudD.checkEdges();
    cloudD.display();
  }
  if (option ==2){ // teddy bears being pet by fluff ball with reaction
    background(250);
    teddyBears.update();
    teddyBears.display();
    noCursor();
  }
  if (option ==3){ //feathers falling 
    cursor();
    background('#d4f5fa');
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
    pillowE.update();
    pillowE.checkEdges();
    pillowE.display();
    pillowF.update();
    pillowF.checkEdges();
    pillowF.display();
    pillowG.update();
    pillowG.checkEdges();
    pillowG.display();
    pillowH.update();
    pillowH.checkEdges();
    pillowH.display();
    pillowI.update();
    pillowI.checkEdges();
    pillowI.display();
    pillowJ.update();
    pillowJ.checkEdges();
    pillowJ.display();
    pillowK.update();
    pillowK.checkEdges();
    pillowK.display();
    pillowL.update();
    pillowL.checkEdges();
    pillowL.display();
  }
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

function pupilL(){ //left pupil
  stroke(0);
  strokeWeight(2);
  fill(0);
  Leftx=map(mouseX,0,width,460,480); //map for the left eye
  Lefty=map(mouseY,0,height,500,540);
  ellipse(Leftx,Lefty,30,30); //left pupil
}

function pupilR(){ //right pupil
  x=map(mouseX,0,width,320,350); //map for the right eye
  y=map(mouseY,0,height,500,540);
  stroke(0);
  strokeWeight(2);
  fill(0);
  ellipse(x,y,30,30); //right pupil
}


function mousePressed() { //when mouse is pressed it switches to a new scene and then loops back to the beginning 
  option++;
  if (option>3) {
    option =1;
  }
}