
class Teddy {
    constructor(x,y){
        this.position =new createVector (x,y);
    }
 
    display() {

    if(mouseX<=width/2 && mouseY<=height/2){ //when mouse is in the top left
        this.teddyAA(); //appears over the original when mouse is hovered 
    } else{
        this.teddyA(); 
    }
    if (mouseX>=width/2 && mouseY<=height/2){ //when mouse is in the top right
        this.teddyBB(); //appears over the original when mouse is hovered 
    } else{
        this.teddyB();
    }
    if(mouseY>=height/2){ //when mouse is in the bottom half of the screen 
        this.teddyCC(); //appears over the original when mouse is hovered 
    } else{
        this.teddyC();
    }
    ellipse(this.position.x, this.position.y, 50, 50); //mouse fluff
    ellipse(this.position.x+5, this.position.y, 50, 50); //mouse fluff
    ellipse(this.position.x, this.position.y+5, 50, 50); //mouse fluff
    ellipse(this.position.x, this.position.y-5, 50, 50); //mouse fluff
    ellipse(this.position.x-5, this.position.y, 50, 50); //mouse fluff
}

    teddyA(){ // top left teddy bear
        stroke(0);
        ellipse(70+100,60+100,40,40); //left ear
        ellipse(130+100,60+100,40,40); //right ear
        ellipse(100+100,100+100, 100,100); //body
        ellipse(100+100,120+100,30,30); //nose
        ellipse(80+100,80+100,10,10);//left eye
        ellipse(120+100,80+100,10,10);//right eye first bear
    }

    teddyAA(){ //variation top left
        stroke(0);
        ellipse(70+100,60+100,40,40); //left ear
        ellipse(130+100,60+100,40,40); //right ear
        ellipse(100+100,100+100, 100,100); //body
        ellipse(100+100,120+100,30,30); //nose
        arc(85+100,80+100,20,20,PI, HALF_PI/15);//left eye wink
        ellipse(120+100,80+100,10,10);//right eye first bear
    }

    teddyB(){ //top right teddy bear
        stroke(0);
        ellipse(270+300,60+100,40,40); //LE second bear
        ellipse(330+300,60+100,40,40);//RE
        ellipse(300+300,100+100, 100,100); //body
        ellipse(300+300,120+100,30,30); //nose
        ellipse(280+300,80+100,10,10);//left eye
        ellipse(320+300,80+100,10,10);//right eye
    }

    teddyBB(){ //variation top right
        stroke(0);
        ellipse(270+300,60+100,40,40); //LE second bear
        ellipse(330+300,60+100,40,40);//RE
        ellipse(300+300,100+100, 100,100); //body
        ellipse(300+300,120+100,30,30); //nose
        arc(285+300,280-90,20,20,PI, HALF_PI/20);//left eye wink
        arc(310+300,280-90,20,20,PI, HALF_PI/20);//right eye wink
    }

    teddyC(){ //bottom teddy bear
        stroke(0);
        ellipse(70+300,60+500,40,40); //left ear
        ellipse(130+300,60+500,40,40); //right ear
        ellipse(100+300,100+500, 100,100); //body
        ellipse(100+300,120+500,30,30); //nose
        ellipse(80+300,80+500,10,10);//left eye
        ellipse(120+300,80+500,10,10);//right eye first bear
    }

    teddyCC(){ //variation bottom 
        stroke(0);
        ellipse(70+290,60+520,40,40); //left ear pushed back
        ellipse(130+310,60+520,40,40); //right ear pushed back
        ellipse(100+300,100+500, 100,100); //body
        ellipse(100+300,120+500,30,30); //nose
        ellipse(80+300,80+500,10,10);//left eye
        ellipse(120+300,80+500,10,10);//right eye first bear
    }

    update() {
    // Updates the position of the fluff based on the mouse coordinates - chat GPT help to get it to appear at the mouse
    this.position.x = mouseX;
    this.position.y = mouseY;
    }
}
