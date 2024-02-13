let teapotModel;
let timer = 10000000;
let angle = 90;
let mc;
let mcUrl = 'https://i.imgur.com/YokgHOl.png'; // Replace 'https://example.com/image.jpg' with the URL of your image


function preload() {
  teapotModel = loadModel('maxwell.obj', true);
  img = loadImage('maxwellcors-2.png');
  mc = loadImage(mcUrl);

}

function setup() {
  createCanvas(500, 500, WEBGL);
  noStroke(); // Disable stroke


  //debugMode();
  describe('displays a model of a teapot using normalMaterial()');
  rotateX(100)
    //blendMode(SCREEN);


}

function draw(){
  tint(255,255,153);
  image(mc, -200, -200, width, height);
    

  //ambientMaterial(250);
  lights();
  ambientLight(255,255,153); 


  //normalMaterial(); // For effect
  //rotateY(90);
  //rotateX(PI);
  //if timer etc,
  if(timer%2 >= 1)
  {
    rotateZ(angle);
  }
  else{
    rotateZ(angle);
  }

  // Move the box side to side along the x-axis
  /*let xOffset = sin(angle) * 100; // Adjust the amplitude as needed
  //translate(xOffset, 0, 0);

  // Draw the rotating box
  rotateY(angle);*/
  texture(img);
  model(teapotModel); //draws model after transformations

  if (frameCount % 60 == 0 && timer > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
    timer --;
  }
  
    if(timer%2 >= 1)
  {
    angle -=0.05;
  }
  else{
    angle +=0.05;
  }

  



  

}