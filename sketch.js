const flock = [];
var cnv;

function setup() {
  cnv = createCanvas(windowWidth, windowHeight);
  cnv.style("display", "block");
  centerCanvas();

  for (let i = 0; i < 100; i++) {
    flock.push(new Boid());
  }
}

function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}

function windowResized() {
  centerCanvas();
}

function draw() {
  background(51);

  for (let boid of flock) {
    boid.edges();
    boid.flock(flock);
    boid.update();
    boid.show();
  }
}
