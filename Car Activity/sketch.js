function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  // Car body
  fill(255, 165, 0); // Orange color
  rect(150, 200, 100, 50);
  
  // Wheels
  fill(0); // Black color
  ellipse(175, 250, 30, 30);
  ellipse(225, 250, 30, 30);
  
  // Windows
  fill(255); // White color
  triangle(160, 210, 160, 190, 200, 190);
  triangle(240, 210, 240, 190, 210, 190);
}