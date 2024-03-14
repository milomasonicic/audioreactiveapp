import { useRef, useState } from "react";


let animationController;

export default function Newtry() {
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
    animationController = window.requestAnimationFrame(visualizeData);
    if (audioRef.current.paused) {
      return cancelAnimationFrame(animationController);
    }
    const songData = new Uint8Array(140);
    analyzer.current.getByteFrequencyData(songData);
    console.log(songData)
    const bar_width = 6;
    const bar_height = 2;
    let start = 3;
    const ctx = canvasRef.current.getContext("2d");
    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    for (let i = 0; i < songData.length; i++) {
      // compute x coordinate where we would draw
      start = i * 4;
      //create a gradient for the  whole canvas
      let gradient = ctx.createLinearGradient(
        0,
        0,
        canvasRef.current.width,
        canvasRef.current.height
      );
      gradient.addColorStop(0.2, "#2392f5");
      gradient.addColorStop(0.5, "#fe0095");
      gradient.addColorStop(1.0, "purple");
      ctx.fillStyle = gradient ;
      //ctx.fillRect(start, canvasRef.current.height, bar_width, -songData[i]);
       
      ctx.fillStyle = "#FD0";
  
  ctx.fillStyle = "#09F";
  ctx.fillRect(start, canvasRef.current.height, bar_width, -songData[i]);
  ctx.fillStyle = "#6C0";
  ctx.fillRect(start * 2, canvasRef.current.height, 7, songData[i])
  

  // set transparency value
   // Draw semi transparent rectangles
   for (let i = 0; i < songData[i]; i++) {
    ctx.fillStyle = `rgb(255 255 255 / ${(i + 1) / 10})`;
    for (let j = 0; j < songData[i]; j++) {
      ctx.fillRect(5 + i * 14, 5 + j * 37.5, 14, 27.5);
    }
  }

  

      /*ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.moveTo(start, 50);
      ctx.lineTo(100, 75);
      ctx.lineTo(100, songData[i]);
      ctx.fill();*/


      //ctx.fillRect(start, canvasRef.current.height, bar_width, -songData[i]);
          
      ctx.fillStyle = "rgb(0 0 200 / 50%)";
      ctx.fillRect(30, 30, 50, 50);
        
      //ctx.fillStyle = gradient;
      //ctx.fillRect(start/2, canvasRef.current.height, bar_height, songData[i]);
    }
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
    </div>
  );
}