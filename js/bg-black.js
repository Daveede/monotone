class Particle {
// setting the co-ordinates, radius and the
// speed of a particle in both the co-ordinates axes.
  constructor(){
    this.x = random(0,width);
    this.y = random(0,height);
    this.r = 4;
    this.xSpeed = random(-1,1);
    this.ySpeed = random(-1,1);
  }

// creation of a particle.
  createParticle() {
    noStroke();
    fill('white');
    circle(this.x,this.y,this.r);
  }

// setting the particle in motion.
moveParticle() {
    if(this.x < 0 || this.x > width)
      this.xSpeed*=-1;
    if(this.y < 0 || this.y > height)
      this.y = random(0,height);
    this.x+=this.xSpeed;
    this.y+=this.ySpeed;
  }

}

// an array to add multiple particles
let particles = [];

function setup() {
  var canvas;
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('bg-black');
  canvas.style('z-index', '0');
  for(let i = 0;i<width/20;i++){ //aumentare il numero per diminuire le particelle
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
