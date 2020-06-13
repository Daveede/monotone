var inc = 40;
var canvasBlack;

function setup() {
  createBlack = createCanvas(windowWidth, windowHeight);
  canvasWhite.parent('bg-black');

  background('black');
  stroke('white');

  for(let x = 0; x <= width; x+=inc) {


    for(let y = 0; y <= height; y+=inc) {

      point(x,y);

    }
  }
}
