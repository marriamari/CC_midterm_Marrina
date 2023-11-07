
class Feathers {
    constructor(x,y){
        this.position =new createVector (x,y);
    }
 
    display() { //help from chat GPT
    // Draw the ellipse at the current position
    ellipse(this.position.x, this.position.y, 100, 50);
    }

    update() {
    // Update the position of the pillow based on the mouse coordinates
    this.position.x = mouseX;
    this.position.y = mouseY;
    }
}
