let hearts = []; //array of objects
//let song;

function preload()
{
  song = loadSound('spooky.mp3');
}

function setup() {
  createCanvas(400, 400);
  song = loadSound('spooky.mp3');

}

function draw() {
  background(0);
  //song.play();

  // Generate a new heart every 30 frames
  if (frameCount % 30 === 0) {
    let newHeart = new Heart(random(width), random(height), random(30, 80));
    hearts.push(newHeart);
  }

  // Display and update all hearts
  for (let i = hearts.length - 1; i >= 0; i--) {
    hearts[i].update();
    hearts[i].display();
    if (hearts[i].isOffscreen()) {
      hearts.splice(i, 1);
    }
  }
}

class Heart {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = color(random(255), random(255), random(255));
  }

  update() {
    // Move the heart upwards
    this.y -= 2;
  }

  display() {
    fill(this.color);
    noStroke();
    ellipse(this.x, this.y, this.size, this.size);
    triangle(this.x+(this.size*0.40),this.y-(this.size*0.4),
             this.x+(this.size*0.1), this.y-this.size,
             this.x,this.y-(this.size*0.4));
    triangle(this.x-(this.size*0.40),this.y-(this.size*0.4),
             this.x-(this.size*0.1), this.y-this.size,
             this.x, this.y-(this.size*0.4));
    fill(random()*1550);
        ellipse(this.x+this.size/4, this.y, this.size/4, this.size/4);
        ellipse(this.x-this.size/4, this.y, this.size/4, this.size/4);



  }

  isOffscreen() {
    return this.y + this.size / 2 < 0;
  }
}

