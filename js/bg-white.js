var inc = 40;
var canvasWhite;

function setup() {
  createWhite = createCanvas(windowWidth, windowHeight);
  canvasWhite.parent('bg-white');
  background('white');
  stroke('black');

  for(let x = 0; x <= width; x+=inc) {


    for(let y = 0; y <= height; y+=inc) {

      point(x,y);

    }
  }
}
