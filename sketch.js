//make little dude a class to get location re:width
//vs location of the mouse
// if(mouseisoverthedude){ being.(growhair)}
//growhair(mouse){.hair()atmouselocation}
//hair(){strokewidth, line(mousex,mousey) mousex + and mousey-}


function setup() {
  // put setup code here
  createCanvas(800,800);
  // background(255);
  h = new Hair(mouseX, mouseY);
  // l = new Brush(mouseX, mouseY);
  // b = new Blob();
}

function draw() {
  // put drawing code here
 //background(255);
 // b.display();
//  if(mouseIsPressed){
//     l.display(mouseX, mouseY);
// //  }
if(mouseX <= width && mouseIsPressed){
  h.display(mouseX, mouseY);
 }
 if(mouseY<= height && mouseIsPressed){
  h.display(mouseX, mouseY);
 }
  mainEllipse();
  eyesEllipse();
  pupilL();
  pupilR();
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
