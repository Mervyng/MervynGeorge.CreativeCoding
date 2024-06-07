let circles = [];
let colors = ['#f94144', '#f3722c', '#f8961e', '#f9844a', '#f9c74f', '#90be6d', '#43aa8b', '#577590'];

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

function draw() {
  background(30);

  // Create a new circle at the mouse position
  let c = {
    x: mouseX,
    y: mouseY,
    size: random(10, 50),
    color: random(colors)
  };
  circles.push(c);

  // Draw all circles
  for (let i = 0; i < circles.length; i++) {
    fill(circles[i].color);
    ellipse(circles[i].x, circles[i].y, circles[i].size);
  }

  // Remove old circles
  if (circles.length > 100) {
    circles.splice(0, 1);
  }
}

function mousePressed() {
  // Change color palette on mouse press
  colors = colors.map(c => color(random(255), random(255), random(255)).toString('#rrggbb'));
}
