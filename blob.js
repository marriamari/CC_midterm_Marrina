class Clouds{

    constructor(x,y,a1,a2){
        this.position = new createVector(x,y);
        this.velocity = new createVector(a1,0); //help from chatGPT - 
        this.acceleration = new createVector(a2,0); //allows the cloud to move horizontally
        this.topspeed =4;
    }
    update(){
        this.velocity.add(this.acceleration); //speeds it up horizonaly
        this.velocity.limit(this.topspeed); //makes it maintain the top speed
        this.position.add(this.velocity);
    }
    display (){
        stroke(150);
        strokeWeight(1);
        fill(255);
        ellipse(this.position.x, this.position.y, 200,200);
        ellipse(this.position.x+70, this.position.y+10, 100,100);
        ellipse(this.position.x-70, this.position.y-5, 120,120);
        ellipse(this.position.x, this.position.y, 100,100);
      }

    checkEdges(){
        if(this.position.x >width){ //wraps around the screen if it goes off
            this.position.x=0;
        }
        if(this.position.x<0){ 
            this.position.x=width;
        }
        if(this.position.y >height){ 
            this.position.y=0;
        }
        if(this.position.y<0){
            this.position.y=height;
        }
    }
}
