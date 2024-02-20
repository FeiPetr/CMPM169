// A BOWL of MAC and CHEESE
// NAME's OBJECT
// NUMBER of OBJECTs
// NOUN of NOUN
// the last NOUN
var font;
var start1 = 30;
var start2 = 120;
var output;

function setup() { 
  createCanvas(500, 500);
  
    opentype.load('data/FreeSans.otf', function(err, f) {
    if (err) {
      console.log(err);
    } else {
      font = f;
      loop();
    }
  });



  background(255);
  textAlign(LEFT, TOP);
  textSize(30);
  text("Fantasy Book Name Generator",
       20, 20, width-40, height-40);
} 

function draw() { 
  if (!font) return;
  let angle = PI / 6; // Rotate text by 30 degrees (in radians)
  rotate(angle);
  background(255);
  textFont(font, 50);
  let shadowColor = color(random()*100, random()*100, random()*100, 255); // transparency
  let offsetX = 2;
  let offsetY = 2;
  let blurRadius = 5;
  textShadow(shadowColor, offsetX-90, offsetY-90, blurRadius);

  text(output, start1, start1, width-40, height-40);
  text(output, start2, start2, width-40, height-40);
  start1++;
  start2++;




}

function mousePressed() {
  start1 = 30;
  start2 = 120;
  var grammar = tracery.createGrammar(grammarSource);
  grammar.addModifiers(tracery.baseEngModifiers);
  //var output = grammar.flatten("#origin#");
  let origin = random(['origin1', 'origin2','origin3','origin4']);
      // Generate text using the selected origin
  output = grammar.flatten('#' + origin + '#');

  background(255);
  textFont(font, 50);
  let shadowColor = color(random()*100, random()*100, random()*100, 255); // transparency
  let offsetX = 2;
  let offsetY = 2;
  let blurRadius = 5;
  textShadow(shadowColor, offsetX-90, offsetY-90, blurRadius);
  //stroke(random()*100,random()*100,random()*100,50); //  outline
  //strokeWeight(1); // Set outline thickness
  //noFill(); // Do not fill the text
  textFont(font, 50);



  text(output, 30, 30, width-40, height-40);
  text(output, 120, 120, width-40, height-40);

  

}

var grammarSource = {
  "origin1": "A #singlenoun# of #noun# and #noun#",
  "origin2": "#name#'s #singlenoun#",
  "origin3": "#noun# of #noun#",
  "origin4": "#number# of #noun#",
  "noun": ["Darkness", "Misery", "Flames", "Fiddlesticks",
    "Crystals", "Hell", "Light", "Pain", "Kingdoms", "Crows", "Ravens","Queens","Kings","Empires","Stars","Ice"],
  "singlenoun": ["Darkness", "Misery", "Flame", "Fiddlestick",
    "Crystal", "Hell", "Light", "Pain", "Kingdom", "Crow", "Raven","Empire","Star","Sun","Moon","Ice"],
  "name": ["Ruby", "Scarlett", "Ebony Dark'ness Way", "Parakeet", "Foxglove", "Shields", "Shrike", "Jasmine","Cassandra","Chapa","Dracula","Aria"],
  "number": [
        "Two",
        "Six",
        "Twelve"
  ]
};

function textShadow(color, offsetX, offsetY, blurRadius) {
  // Apply text shadow effect
  for (let i = 0; i < blurRadius; i++) {
    fill(color.levels[0], color.levels[1], color.levels[2], color.levels[3] / blurRadius);
    text(output, width / 4 + offsetX, height / 4 + offsetY);
    text(output, width / 4 + offsetX+90, height / 4 + offsetY+90);

  }
}