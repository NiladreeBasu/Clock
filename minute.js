class Minute{
    constructor(){

    }

    display(){
        var mAngle = mn;
        mAngle = map(mn,0,60,0,360);
        angleMode(DEGREES);
        push();
        rotate(mAngle);
        stroke("green");
        strokeWeight(7)
        line(0,0,100,0);
        pop();
    }
}