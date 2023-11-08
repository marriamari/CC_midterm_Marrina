
class Feathers {
    
    constructor(x,y, a1, a2){
        this.position = new createVector(x,y);
        this.velocity = new createVector(0,0);
        this.acceleration = new createVector(a1,a2);
        this.topspeed =1;
    }

    update(){
        this.velocity.add(this.acceleration); //speeds it up continuously
        this.velocity.limit(this.topspeed); //makes it maintain a top speed
        this.position.add(this.velocity);
    }

    display(){
        this.stem();
        this.feather();
    }

    stem(){ //stem of feather 
        fill(150);
        rect(this.position.x-45,this.position.y-1, 30,2);
      }
      
    feather(){ //main feather body shape
        stroke(0);
        fill(230);
        ellipse(this.position.x,this.position.y,60,10); //body
        ellipse(this.position.x,this.position.y,60,1); //middle line of feather
      }

    checkEdges(){
        if(this.position.x >width){ 
            this.position.x=width;
        }
        if(this.position.x<0){ 
            this.position.x=0;
        }
        if(this.position.y >height){  //wraps when it gets to the bottom of the screen 
            this.position.y=0;
        }
        if(this.position.y<0){
            this.position.y=height;
        }
    }
}