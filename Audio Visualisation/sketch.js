let mySound, fft;

function preload() {
  mySound = loadSound('Happy instrumental ringtone _1 minute ringtone _BACKGROUND MUSIC 2022 ringtone _copyright free.mp3');
}

function setup() {
  createCanvas(400, 400);
  background(0);
  fft = new p5.FFT();
  mySound.setVolume(0.5);
  mySound.play();
  mySound.loop();
}

function draw() {
  background(0);

  let spectrum = fft.analyze();
  noStroke();
  fill(0, 255, 0);
  
  // Draw spectrum as vertical bars
  for (let i = 0; i < spectrum.length; i++) {
    let x = map(i, 0, spectrum.length, 0, width);
    let h = map(spectrum[i], 0, 255, 0, height);
    rect(x, height - h, width / spectrum.length, h);
  }

  let waveform = fft.waveform();
  noFill();
  stroke(255, 0, 0);
  strokeWeight(2);
  
  // Draw waveform as a continuous line
  beginShape();
  for (let i = 0; i < waveform.length; i++) {
    let x = map(i, 0, waveform.length, 0, width);
    let y = map(waveform[i], -1, 1, 0, height);
    vertex(x, y);
  }
  endShape();
}
