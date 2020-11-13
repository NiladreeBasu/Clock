class Hour{
    constructor(){

    }

    display(){
        var hAngle = hr;
        hAngle = map(0,12,0,360)
        angleMode(DEGREES);
        push();
        rotate(hAngle);
        stroke("blue");
        strokeWeight(7)
        line(0,0,100,0);
        pop();
    }
}