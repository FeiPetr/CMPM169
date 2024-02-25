let table;
let species;
let colorScale = {
  'meadow.pipit': 'red',
  'tree.pipit': 'green',
  'hedge.sparrow': 'blue',
  'robin': 'yellow',
  'pied.wagtail': 'orange',
  'wren': 'cyan'
};



function preload() {
  // Load the CSV file
  table = loadTable('Cuckoo_Eggs.csv', 'csv', 'header');


}
//wren,pied wagtail, robin, sparrow,tree pipit,meadow pipit

function setup() { 
  createCanvas(500, 500);
  
  background(255);
  
  textSize(16);
  species = table.getColumn(4); // Get species data
  print(species);

  
  let colors = species.map(species => colorScale[species]);

  
  let x = [];
  let y = [];
  var div = createDiv(" ");
  div.id("myPlot");
  div.position(0,0);
  div.size(500,500-200);

  
  x = table.getColumn(3);
  y = table.getColumn(2);

  
    var data = [{
    x: x,
    y: y,
    type: "scatter",
    mode: "markers",
    marker: {
      color: colors,
      size: 10
    }

  }];
   var layout = [{
     xaxis: {title: "Egg Breadth"},
     yaxis: {title: "Egg Length"},
     title: "Cuckoo Egg Length and Breadth vs Host Nest Species"
   }];
  
  Plotly.newPlot("myPlot",data,layout);
  drawKey();



} 

function draw() {
    drawKey();

  //background(220);
  
  // Display the CSV data
  //console.log("test");
/*
  if (table) {
    for (let i = 0; i < table.getRowCount(); i++) {
      //let row = table.getRow(i);
      let hostSpecies = table.getString(i,4);
      let eggBreadth = table.getNum(i,3);
      let eggLength = table.getNum(i,2);
      
      // Display data on the canvas
      let y = 30 + i * 20; // Adjust the y position for each row
      text(hostSpecies + ': Species ' + eggBreadth + ', Egg ' + eggLength, 20,y);
    }
  } else {
    // Display a message if the data hasn't loaded yet
    text('Loading data...', 20, 20);
  }*/
}

function drawKey() {
  let y = 600;
  // Draw key for each species and color
  for (let species in colorScale) {
    fill(colorScale[species]);
    rect(20, y, 20, 20); // Draw colored rectangle
    fill(0);
    text(species, 50, y + 12); // Draw species name
    y += 30; // Increase y position for next key
  }
  text("Cuckoo Egg Length and Breadth vs Host Nest Species", 300, 610); // Draw species name
  text("x: Egg Breadth", 300, 635);
  text("y: Egg Length", 300, 660);


}

