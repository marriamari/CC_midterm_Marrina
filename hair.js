class Hair {
    constructor(x,y){
        this.position =new createVector (x,y);
    }

    display(mX, mY) {

        stroke('#d40f78');
        strokeWeight(2);
        for (mX=mouseX; mX ==20; mX++){
            for(mY=mouseY;mY ==30; mY++){
                line(mX,mY,mX+10,mY+10);
            }
            
        }
    }
}