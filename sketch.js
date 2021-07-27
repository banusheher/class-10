var a,b;

function preload(){

}

function setup() {
  createCanvas(800, 400);
  a = prompt("please enter the varibale a");
  b = prompt("please enter the varibale b");
  var button1  = createButton("click here to swap")
  button1.mousePressed(swap);
}

function draw() {
  background(220);
  //console.log(a);
 // console.log(b);
 text("hello", 400,200)
  drawSprites()
}

function swap(){

  [a,b] = [b,a];
  console.log("the number after swapping a is " + a);
  console.log("the number after swapping b is " +b);
}



















































