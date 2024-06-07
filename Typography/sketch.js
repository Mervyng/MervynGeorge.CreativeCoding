var word = "Bath Spa University";
var font1, font2, font3;

function preload() {
  font1 = loadFont("BlackOpsOne-Regular.ttf");
  font2 = loadFont("Comfortaa-Light.ttf");
  font3 = loadFont("ShadowsIntoLight.ttf");
}

var points;

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Choose one of the fonts to use
  var font = font3;

  stroke(12); // Stroke color value should be an integer

  // Correct spelling of "University"
  points = font.textToPoints('Bath Spa University', 100, 300, 100, { sampleFactor: 0.15 });

  background(255);

  for (var i = 0; i < points.length; i++) {
    var p = points[i];
    ellipse(p.x, p.y, 3, 3);
  }
}
