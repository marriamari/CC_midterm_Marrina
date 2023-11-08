class Clouds{

    constructor(x,y,a1,a2){
        this.position = new createVector(x,y);
        this.velocity = new createVector(a1,0); //help from chatGPT - to not move verticaly but rather horizontaly
        this.acceleration = new createVector(a2,0); //allows the cloud to move horizontaly
        this.topspeed =4;
    }
    update(){
        this.velocity.add(this.acceleration); //speeds it up horizontaly
        this.velocity.limit(this.topspeed); //makes it maintain the top speed
        this.position.add(this.velocity);
    }
    display (){
        stroke(150);
        strokeWeight(1);
        fill(255);
        ellipse(this.position.x, this.position.y, 200,200); //cloud bumps
        ellipse(this.position.x+100, this.position.y-10, 150,130); //cloud bumps
        ellipse(this.position.x-50, this.position.y-5, 190,190); //cloud bumps
        ellipse(this.position.x-150, this.position.y+5, 150,100); //cloud bumps
      }

    checkEdges(){
        if(this.position.x >width){ //wraps around the screen when it goes off
            this.position.x=0;
        }
        if(this.position.x<0){ 
            this.position.x=width;
        }
    }
}
