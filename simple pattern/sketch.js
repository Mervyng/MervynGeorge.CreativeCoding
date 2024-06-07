function setup() {
  createCanvas(400, 400);
  background(255);
  noLoop(); // Ensures the draw function only runs once
}

function draw() {
  let cols = 10; // Number of columns
  let rows = 10; // Number of rows
  let circleDiameter = width / cols; // Diameter of each circle
  let circleRadius = circleDiameter / 2;

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i * circleDiameter + circleRadius;
      let y = j * circleDiameter + circleRadius;
      let colorValue = (i + j) % 2 === 0 ? 0 : 255; // Alternate between black and white
      fill(colorValue);
      ellipse(x, y, circleDiameter, circleDiameter);
    }
  }
}
