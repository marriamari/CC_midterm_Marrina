

function setup() {
  // put setup code here
  createCanvas(800,800);
  // pupilX = 470;
  // pupilY = 540;
  // pupilA = 330;
  // pupilB = 540;
  l = new Brush(mouseX,mouseY);
}

function draw() {
  // put drawing code here
  background(255);
  l.display();
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

function eyesEllipse(){ //whites of eyes
  stroke (0);
  fill(255);
  ellipse(470,520,60,70); //left eye
  ellipse(330,520,60,70); //rigth eye
}

function pupilL(){ //pupils to the eyes
  stroke(0);
  strokeWeight(2);
  fill(0);
  Leftx=map(mouseX,0,width,460,480);
  Lefty=map(mouseY,0,height,500,540);
  ellipse(Leftx,Lefty,30,30); //left pupil
}

function pupilR(){
  x=map(mouseX,0,width,320,350);
  y=map(mouseY,0,height,500,540);
  stroke(0);
  strokeWeight(2);
  fill(0);
  ellipse(x,y,30,30); //right pupil
}

// function hairBrush(){
//   if (mouseIsPressed ==true){
//     line(200,400,250,450);

//   }
// }

// function mousePressed() {
//   // Start drawing when the mouse is pressed
//   // Draw a cluster of lines
//   for (let i = 0; i < 10; i++) { // Change the number of lines as needed
//     let x1 = mouseX + random(-20, 10);
//     let y1 = mouseY + random(-20, 10);
//     let x2 = pmouseX + random(-20, 10);
//     let y2 = pmouseY + random(-20, 10);
    
//     line(x1, y1, x2, y2);
//   }
//   translate(mouseX, mouseY);
// }
// function mousePressed() {
//   // Start drawing when the mouse is pressed
//   hairBrush(mouseX, mouseY, pmouseX, pmouseY);
// }

// function hairBrush(x1,y1,x2,y2){
//   line(x1,y1,x2,y2);
// }