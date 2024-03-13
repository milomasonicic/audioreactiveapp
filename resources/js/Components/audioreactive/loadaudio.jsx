import { useRef, useState } from "react";
import * as React from "react";
import { ReactP5Wrapper } from "@p5-wrapper/react";
import Canvas2  from "./canvas2";


let animationController;

export default function LoadSound() {
  const [file, setFile] = useState(null);
  const canvasRef = useRef();
  const audioRef = useRef();
  const source = useRef();
  const analyzer = useRef();

  const handleAudioPlay = () => {
    let audioContext = new AudioContext();
    if (!source.current) {
      source.current = audioContext.createMediaElementSource(audioRef.current);
      analyzer.current = audioContext.createAnalyser();
      source.current.connect(analyzer.current);
      analyzer.current.connect(audioContext.destination);
      console.log(analyzer.current, source.current, analyzer.current )
    }
    visualizeData();
  };
  
  const visualizeData = () => {
      const songData = new Uint8Array(140);
      analyzer.current.getByteFrequencyData(songData);
      console.log(songData)

      function sketch(p5) {
 
        p5.setup = () => p5.createCanvas(400, 400);
      
        p5.draw = () => {
          p5.background(220);
          p5.ellipse(50, 50, 80, 80);
        };
      }
      
      return <ReactP5Wrapper sketch={sketch} />;
  };

  return (
    <div className="App">
        aaa
      <input
        type="file"
        onChange={({ target: { files } }) => files[0] && setFile(files[0])}
      />
      {file && (
        <audio
          ref={audioRef}
          onPlay={handleAudioPlay}
          src={window.URL.createObjectURL(file)}
          controls
        />
      )}
      <canvas ref={canvasRef} width={500} height={200} />

      <Canvas2></Canvas2>
    </div>
  );
}