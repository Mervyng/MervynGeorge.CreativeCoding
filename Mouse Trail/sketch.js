let trail = [];

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(255);
  
  // Draw the trail
  for (let i = 0; i < trail.length; i++) {
    let transparency = map(i, 0, trail.length, 255, 0);
    fill(trail[i].color[0], trail[i].color[1], trail[i].color[2], transparency);
    noStroke();
    rectMode(CENTER);
    rect(trail[i].x, trail[i].y, trail[i].size, trail[i].size);
  }
  
  // If mouse is pressed, add a new element to the trail
  if (mouseIsPressed) {
    let color = [random(0, 255), random(0, 255), random(0, 255)];
    trail.push({x: mouseX, y: mouseY, size: random(10, 50), color: color});
    
    // Limit the trail length
    if (trail.length > 50) {
      trail.splice(0, 1);
    }
  }
}
