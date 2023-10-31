/*
  Check our the GOAL and the RULES of this exercise at the bottom of this file.
  
  After that, follow these steps before you start coding:

  1. rename the dancer class to reflect your name (line 35).
  2. adjust line 20 to reflect your dancer's name, too.
  3. run the code and see if a square (your dancer) appears on the canvas.
  4. start coding your dancer inside the class that has been prepared for you.
  5. have fun.
  
  
*/
let dancer;

function setup() {
  // no adjustments in the setup function needed...
  createCanvas(windowWidth, windowHeight);
  // ...except to adjust the dancer's name on the next line:
  dancer = new Seagull(width / 2, height / 2);
}

function draw() {
  // you don't need to make any adjustments inside the draw loop
  background(0);
  drawFloor(); // for reference only
  dancer.update();
  dancer.display();
}

class Seagull {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.ang = 0;
    this.cute1=0;
    this.cute2=0;
    this.e1=15
    this.e2=100
    this.spd=1
  }

  update() {
    angleMode(DEGREES)
    this.ang = sin(frameCount * 20) * 8;
    this.cute1= sin(frameCount * 20)
    this.cute2= sin(180+frameCount * 20)
    this.e1=map(mouseX,0,width,12,18)
    this.e2=map(mouseY,0,height,97,103)
    this.e3=map(mouseY,0,height,75,81)
    
    this.x+=this.spd
    if (this.x>=width-100||this.x<=100){
      this.spd*=-1
    }
  }

  display() {
    push();
    translate(this.x, this.y);
    rotate(this.ang);

    translate(0, -150);

    //wing
    bezier(-80, 140, -130, 140-map(this.cute1,-1,1,-0.5,1.5)*40, -150, 180, -127+map(this.cute1,-1,1,0,2)*10, 190);
    bezier(80, 140, 130, 140-map(this.cute2,-1,1,-0.5,1.5)*40, 150, 180, 127-map(this.cute2,-1,1,0,2)*10, 190);

    //body
    fill(255);
    beginShape();
    curveVertex(0, 60);
    curveVertex(0, 60);
    curveVertex(-20-map(this.cute2,-1,1,-0.5,1.5)*4, 70);
    curveVertex(-60, 120);
    curveVertex(-130+map(this.cute1,-1,1,-0.5,1.5)*10, 200);
    curveVertex(-120+map(this.cute1,-1,1,-0.5,1.5)*10, 270);
    curveVertex(0, 300);
    curveVertex(120-map(this.cute2,-1,1,-0.5,1.5)*10, 270);
    curveVertex(130-map(this.cute2,-1,1,-0.5,1.5)*10, 200);
    curveVertex(60, 120);
    curveVertex(20+map(this.cute1,-1,1,-0.5,1.5)*4, 70);
    curveVertex(0, 60);
    curveVertex(0, 60);
    endShape();

    strokeWeight(1);
    stroke(0);

    
    rotate(this.ang/3)
    //mouth
    fill(255, 197, 0);
    ellipse(0, 113, 35, 20);

    //eye & eyebrow
    fill(255);
    circle(-13, 100, 25);
    circle(13, 100, 25);

    fill(0);
    circle(this.e1-30, this.e2, 10);
    circle(this.e1, this.e2, 10);
    triangle(-5, this.e3, -24, this.e3+5, -23, this.e3+11);
    triangle(5, this.e3, 24, this.e3+5, 23, this.e3+11);

    //feet
    fill(255, 197, 0);
    beginShape();
    curveVertex(70, 290);
    curveVertex(70, 290);
    curveVertex(80, 330);
    curveVertex(100, 340+this.cute2*10);
    curveVertex(100, 355+this.cute2*10);
    curveVertex(63+this.cute2*3, 350);
    curveVertex(50, 294);
    curveVertex(50, 294);
    endShape();

    beginShape();
    curveVertex(-70, 290);
    curveVertex(-70, 290);
    curveVertex(-80, 330);
    curveVertex(-100, 340+this.cute1*10);
    curveVertex(-100, 355+this.cute1*10);
    curveVertex(-63-+this.cute1*3, 350);
    curveVertex(-50, 294);
    curveVertex(-50, 294);
    endShape();

    pop();

    //this.drawReferenceShapes()
  }

  // drawReferenceShapes(){
  //   noFill();
  //   stroke(255, 0, 0);
  //   line(-5, 0, 5, 0);
  //   line(0, -5, 0, 5);
  //   stroke(255);
  //   rect(-100, -100, 200, 200);
  //   fill(255);
  //   stroke(0);
  // }
}

/*
GOAL:
The goal is for you to write a class that produces a dancing being/creature/object/thing. In the next class, your dancer along with your peers' dancers will all dance in the same sketch that your instructor will put together. 

RULES:
For this to work you need to follow one rule: 
  - Only put relevant code into your dancer class; your dancer cannot depend on code outside of itself (like global variables or functions defined outside)
  - Your dancer must perform by means of the two essential methods: update and display. Don't add more methods that require to be called from outside (e.g. in the draw loop).
  - Your dancer will always be initialized receiving two arguments: 
    - startX (currently the horizontal center of the canvas)
    - startY (currently the vertical center of the canvas)
  beside these, please don't add more parameters into the constructor function 
  - lastly, to make sure our dancers will harmomize once on the same canvas, please don't make your dancer bigger than 200x200 pixels. 

*/
