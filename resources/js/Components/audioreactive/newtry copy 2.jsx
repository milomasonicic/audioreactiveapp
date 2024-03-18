import { useEffect, useRef, useState } from "react";

import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';


let animationController;

export default function Newtry() {
  const [file, setFile] = useState(null);
  
  const canvasRef = useRef();
  const audioRef = useRef();
  const source = useRef();
  const analyzer = useRef();
  const [sliderValue, setSliderValue] = useState(23)

  //slider

  

  const pause = () => {
    audioRef.current.pause()
  }

  let audioContext = new AudioContext();
    if (!source.current) {
      source.current = audioContext.createMediaElementSource(audioRef.current);
      analyzer.current = audioContext.createAnalyser();
      source.current.connect(analyzer.current);
      analyzer.current.connect(audioContext.destination);
      console.log(analyzer.current, source.current, analyzer.current )
    }
  

  const handleAudioPlay = () => {
    
    visualizeData(sliderValue);
  };
  
  const visualizeData = (sliderValue) => {
    animationController = window.requestAnimationFrame(visualizeData);
    if (audioRef.current.paused) {
      return cancelAnimationFrame(animationController);
    }
    const songData = new Uint8Array(140);
    analyzer.current.getByteFrequencyData(songData);

    console.log(songData)
 
    const bar_width = sliderValue;
    let start = 0;
    const ctx = canvasRef.current.getContext("2d");
    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    for (let i = 0; i < songData.length; i++) {
      // compute x coordinate where we would draw
      start = i * 8;
      //create a gradient for the  whole canvas
      let gradient = ctx.createLinearGradient(
        0,
        0,
        canvasRef.current.width,
        canvasRef.current.height
      );
      gradient.addColorStop(0.2, "green");
      gradient.addColorStop(0.5, "blue");
      gradient.addColorStop(0.4, "red");

  
    ctx.fillStyle = gradient;
    ctx.fillRect(start, canvasRef.current.height, bar_width, -songData[i]);
     ctx.strokeRect(start, canvasRef.current.height, bar_width, -songData[i]);
      
    }
  };

  const OnChangeEventTriggerd = (newValue) => {
    if(audioRef.current.paused) {
      console.log("new Value", newValue);
      setSliderValue(newValue);
    } else {
      console.log("no edit")
    }
  };

  return (
    <div className="App">
      <div className="border border-red-700 max-w-container mx-auto flex flex-col">
      <div className="border border-black order-last flex">
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

    

    <div className="w-[250px]">
      <Slider
      defaultValue={sliderValue}
      min={3}
      max={300}
      onChange={OnChangeEventTriggerd}
       
         />
     </div>

     <div onClick={pause}> Pause</div>


      </div>  
      
      <canvas ref={canvasRef} width={700} height={420}  className="mx-auto border border-red-700"/>
      </div>


    
    
        
    </div>
  );
}