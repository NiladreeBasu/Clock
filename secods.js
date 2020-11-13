class Second{
    constructor(){
        
    }

    display(){
        var sAngle = sc;
        sAngle = map(sc,0,60,0,360);
        angleMode(DEGREES);
        push();
        rotate(sAngle);
        stroke("red");
        strokeWeight(7)
        line(0,0,100,0);
        pop();
    }
}