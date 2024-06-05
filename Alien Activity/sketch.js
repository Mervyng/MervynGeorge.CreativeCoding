function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  // Body
  fill(102, 204, 255);
  ellipse(200, 200, 120, 160);
  
  // Head
  fill(128, 255, 179);
  ellipse(200, 120, 80, 100);
  
  // Eyes
  fill(255);
  ellipse(180, 110, 20, 20);
  ellipse(220, 110, 20, 20);
  
  // Pupils
  fill(0);
  ellipse(180, 110, 10, 10);
  ellipse(220, 110, 10, 10);
  
  // Mouth
  noFill();
  stroke(0);
  arc(200, 140, 40, 20, 0, PI);
  
  // Arms
  strokeWeight(8);
  line(140, 200, 100, 250);
  line(260, 200, 300, 250);
}
