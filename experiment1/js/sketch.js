// P_3_2_1_01
//
// Generative Gestaltung – Creative Coding im Web
// ISBN: 978-3-87439-902-9, First Edition, Hermann Schmidt, Mainz, 2018
// Benedikt Groß, Hartmut Bohnacker, Julia Laub, Claudius Lazzeroni
// with contributions by Joey Lee and Niels Poldervaart
// Copyright 2018
//
// http://www.generative-gestaltung.de
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// CREDITS
// FreeSans.otf (GNU FreeFont), see the readme files in data folder.

/**
 * typo outline displayed as dots and lines
 *
 * KEYS
 * a-z                  : text input (keyboard)
 * backspace            : delete last typed letter
 * ctrl                 : save png
 */

var textTyped = 'Type ...!';

var font;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();

  opentype.load('data/FreeSans.otf', function(err, f) {
    if (err) {
      console.log(err);
    } else {
      font = f;
      loop();
    }
  });
}

function draw() {
  
  if (!font) return;
    background(255);

    stepX = mouseX + 2;
  stepY = mouseY + 2;

  for (var gridY = 0; gridY < height; gridY += stepY) {
    for (var gridX = 0; gridX < width; gridX += stepX) {
      //fill(gridX, height - gridY, 100);
      //rect(gridX, gridY, stepX, stepY);
      fill(gridY, height - gridX, 100);
      rect(random()*100, random()*100, stepX, stepY);

    }
  }

  

  /*fill(200, 0, 100);
  rect(0, 0, 10000, 10000);*/

  // margin border
  translate(20, 220);

  if (textTyped.length > 0) {
    // get a path from OpenType.js
    var fontPath = font.getPath(textTyped, 0, 0, 200);
    // convert it to a g.Path object
    var path = new g.Path(fontPath.commands);
    // resample it with equidistant points
    path = g.resampleByLength(path, 110);
    path = g.resampleByAmount(path, 999);

    // lines
    stroke(random()*500, random()*500, random()*300);
    strokeWeight(2.0);
    var l = 5;
    for (var i = 0; i < path.commands.length; i++) {
      var pnt = path.commands[i];
      line(pnt.x, pnt.y, pnt.x, pnt.y);
      //console.log(pnt.x);
    }

    // dots
    fill(99);
    noStroke();
    var diameter = 7;
    for (var i = 0; i < path.commands.length; i++) {
      var pnt = path.commands[i];
      // on every 2nd point
    }
  }

  noLoop();
}

function keyReleased() {
  // export png
  if (keyCode == CONTROL) saveCanvas(gd.timestamp(), 'png');
}

function keyPressed() {
  if (keyCode == DELETE || keyCode == BACKSPACE) {
    if (textTyped.length > 0) {
      textTyped = textTyped.substring(0, textTyped.length - 1);
      loop();
    }
  }
}

function keyTyped() {
  if (keyCode >= 32) {
    textTyped += key;
    loop();
  }
}
