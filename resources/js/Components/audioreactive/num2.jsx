import { useRef, useState } from "react";

//RED NUMBERS COMPONENT

let animationController;

export default function Num() {
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

    let start = 0;
    const ctx = canvasRef.current.getContext("2d");

    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    for (let i = 0; i < songData.length; i++) {
      
      start = i * 20;
      ctx.font = "22px + Arial" 
      ctx.fillStyle = "blue";
      ctx.fillText(songData[i], canvasRef.current.height + start, songData[i]);  
      ctx.fillStyle = "black";
      ctx.fillText(songData[i], canvasRef.current.height - start , songData[i]);  

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
      <canvas ref={canvasRef} width={1000} height={400} />
    </div>
  );
}