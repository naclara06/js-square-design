function setup() {
    createCanvas(500, 500);
    background("white");
  }
  
  function draw() {
  
    stroke("fuchsia");
    fill("pink");
  
    //console.log(mouseIsPressed);
  
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 20, 35);
    }
  }
  