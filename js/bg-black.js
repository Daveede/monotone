
// an array to add multiple particles
let particles2 = [];

function setup() {
  var canvasBlack;
  canvasBlack = createCanvas(windowWidth, windowHeight);
  canvasBlack.parent('bg-black');
  for(let i = 0;i<width/6;i++){
    particles.push(new Particle());
  }
}

function draw() {
  background('black');
  for(let i = 0;i<particles.length;i++) {
    particles[i].createParticle();
    particles[i].moveParticle();
  }
}
