
class Pillows {
    
    constructor(x,y, a1, a2){
        this.position = new createVector(x,y);
        this.velocity = new createVector(0,0);
        this.acceleration = new createVector(a1,a2);
        this.topspeed =3;
    }

    update(){
        this.velocity.add(this.acceleration); //speeds it up conitnuosu
        this.velocity.limit(this.topspeed); //makes it maintaina a top speed
        this.position.add(this.velocity);
    }
    display(){
        stroke(0);
        fill(255);
        ellipse(this.position.x, this.position.y, 60,20);

    }
    checkEdges(){
        if(this.position.x >width){ 
            this.position.x=width;
        }
        if(this.position.x<0){ 
            this.position.x=0;
        }
        if(this.position.y >height){ 
            this.position.y=height;
        }
        // if(this.position.y<0){
        //     this.position.y=height;
        // }
    }
}