import * as React from "react";
import { ReactP5Wrapper } from "@p5-wrapper/react";



function sketch(p5) {
 
  p5.setup = () => p5.createCanvas(400, 400);

  p5.draw = () => {
    p5.background(220);
    p5.ellipse(50, 50, 80, 80);
  };
}


export default function Canvas2() {
  return <ReactP5Wrapper sketch={sketch} />;
}