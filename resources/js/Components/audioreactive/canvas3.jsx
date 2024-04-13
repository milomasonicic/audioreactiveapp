import * as React from "react";
import { ReactP5Wrapper } from "@p5-wrapper/react";




function sketch(p5) {
  p5.setup = () => p5.createCanvas(240, 240, p5.WEBGL);

  p5.draw = () => {
    p5.background("#F3F4F6");
    p5.normalMaterial();
    p5.push();
    p5.rotateZ(p5.frameCount * 0.01);
    p5.rotateX(p5.frameCount * 0.05);
    p5.rotateY(p5.frameCount * 0.01);
    p5.box(45);
    p5.pop();
    
  };
}

export default function Canvas3() {
  return <ReactP5Wrapper sketch={sketch} />;
}