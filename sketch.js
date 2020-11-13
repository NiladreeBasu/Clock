var hr = hour();
var mn = minute();
var sc = second();

var seconds,minutes,hours;

function preload(){

}

function setup(){
  createCanvas(800,800);

  seconds = new Second();
  minutes = new Minute();
  hours = new Hour();

}

function draw(){
  background("black");  

  seconds.display();
  minutes.display();
  hours.display();
}