class Brush {
    constructor(x,y,x2,y2){
        this.position =new createVector (x,y,x2,y2);
    }

    display() {
        stroke('#d40f78');
        strokeWeight(2);
        line(this.position.x, this.position.y,this.position.x2, this.position.y2);
    }
}