import p5 from "p5";

const sketch = (p: p5) => {
  let x = 0;
  let y = 0;

  p.setup = () => {
    p.createCanvas(400, 400);
    x = p.width / 2;
    y = p.height / 2;
  };

  p.draw = () => {
    p.background(200);

    p.fill(150, 50, 200);
    p.noStroke();
    p.ellipse(x, y, 50, 50);

    x += 1;
    if (x > p.width) {
      x = 0;
    }
  };
};

// Initialize the p5 instance
new p5(sketch);
