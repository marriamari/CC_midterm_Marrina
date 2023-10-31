
class Brush {
    constructor(x,y){
        this.position =new createVector (x,y);
    }

    display(mX, mY) {

        stroke('#d40f78');
        strokeWeight(2);
        if(mouseIsPressed){
            line(mX, mY, mX + 10, mY + 5);
            print(mouseX, mouseY)
        }
    }
}
