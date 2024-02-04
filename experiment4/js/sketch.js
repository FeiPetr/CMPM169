// sketch.js - purpose and description here
// Author: Sofia Petrova
// Date: February 3rd 2024

// Here is how you might set up an OOP p5.js project
// Note that p5.js looks for a file called sketch.js

// Constants - User-servicable parts
// In a longer project I like to put these in a separate file
let song;
let img;
let soundPlayed = false;

var slider;
var pixelSizeSlide;
var oldSlider;
var imgReset;
var addChange;


function preload()
{
  song = loadSound('mac.mp3');
  sadsong = loadSound('spooky.mp3');

  img = loadImage('menufor4.png');
  imgReset = loadImage('menufor4.png');

}

function setup() {

  createCanvas(400, 400);
  img.resize(width, height);
  imgReset.resize(width, height);
  pixelSizeSlide = 5;
  oldSlider = pixelSizeSlide;
  addChange = 0;

  pixelDensity(1); // Set pixel density to 1 to ensure one pixel corresponds to one pixel in the canvas
  noStroke();
  image(imgReset, 0, 0); // Display the original image

  image(img, 0, 0); // Display the original image
  loadPixels();
  pixelate(pixelSizeSlide); // Adjust the pixel size as needed
  song.setVolume(1);
  slider = createSlider(0.1, 1, 0.1, 0.1);
  song.play();





}


function pixelate(pixelSize) {
  img.loadPixels(); //load pixels
  //console.log(pixels);

  for (let y = 0; y < height; y += pixelSize) {
    for (let x = 0; x < width; x += pixelSize) {
      let loc = (x + y * width) * 4; // Calculate the pixel location in the pixel array
      // Get the average color of the pixel block
      let avgColor = getAverageColor(x, y, pixelSize);
      //console.log(avgColor);

      // Apply the average color to each pixel in the block
      for (let blockY = 0; blockY < pixelSize; blockY++) {
        for (let blockX = 0; blockX < pixelSize; blockX++) {
          let index = (x + blockX + (y + blockY) * width) * 4;
          pixels[index] = avgColor[0];
          pixels[index + 1] = avgColor[1];
          pixels[index + 2] = avgColor[2];
          pixels[index + 3] = avgColor[3];
        }
      }
    }
  }

  updatePixels();
}


function getAverageColor(x, y, pixelSize) {
  let totalR = 0,
    totalG = 0,
    totalB = 0,
    totalA = 0;

  for (let blockY = 0; blockY < pixelSize; blockY++) {
    for (let blockX = 0; blockX < pixelSize; blockX++) {
      let loc = (x + blockX + (y + blockY) * width) * 4;
      //console.log(totalR);

      totalR += pixels[loc];
      totalG += pixels[loc + 1];
      totalB += pixels[loc + 2];
      totalA += pixels[loc + 3];
    }
  }

  let avgR = totalR / (pixelSize * pixelSize);
  let avgG = totalG / (pixelSize * pixelSize);
  let avgB = totalB / (pixelSize * pixelSize);
  let avgA = totalA / (pixelSize * pixelSize);

  return [avgR, avgG, avgB, avgA];
}

function draw() {

  song.setVolume(slider.value());
  pixelSizeSlide = slider.value()*20; //update pixel size
  if (oldSlider != pixelSizeSlide && addChange < 80)
    {
      img = imgReset;
      img.loadPixels();
      pixelate(pixelSizeSlide); // Adjust the pixel size as needed
      oldSlider = pixelSizeSlide;
      addChange++;
      
    }
  
  if(addChange>70)
    {
      background(0);
      textSize(32);
      fill(255);
      text('jumpscare', 50, 50);
      song.stop();
      sadsong.play();
      sadsong.setVolume(slider.value());
    }
    


}

function mousePressed() {
    // Check if the sound is not already playing
    if (!soundPlayed) {
      song.play(); // Play the sound
      soundPlayed = true; // Set the flag to true so that the sound doesn't play again
    }
  }
  