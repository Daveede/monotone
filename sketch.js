function setup() {
  createCanvas(displayWidth, displayHeight);
  canvas.style('z-index', '-1')
  background('black');
  stroke('white');

  for(let x = 0; x <= width; x+=20) {


    for(let y = 0; y <= height; y+=20) {

      point(x,y);

    }


  }


  save("grid.png");


}
