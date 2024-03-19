import { useRef, useState } from "react";

import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

import EditingSlider from '../sliders/slider'


let animationController;

export default function Bars() {
  const [file, setFile] = useState(null);
  const [msg, setMsg] = useState("Poruka za promeni");
  const canvasRef = useRef();
  const audioRef = useRef();
  const source = useRef();
  const analyzer = useRef();
  const sliderValueRef = useRef(23)
  //const sliderValue = useState(23)

  //poruka za promenu

  function promena(msg) {
    setMsg(msg)
  }
  

  //slider

  const OnChangeEventTriggerd = (newValue) => {
    
    console.log("new Value", newValue);
    sliderValueRef.current = newValue;
    console.log(sliderValueRef.current)
  };

  //slider

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
    /*if (audioRef.current.paused) {
      cancelAnimationFrame(animationController);

    }*/
    const songData = new Uint8Array(140);
    analyzer.current.getByteFrequencyData(songData);
   
    console.log(sliderValueRef.current, "iz vizaluze fukcije")
    
    const bar_width = sliderValueRef.current;
    let start = 0
    const ctx = canvasRef.current.getContext("2d");
    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    for (let i = 0; i < songData.length; i++) {
      // compute x coordinate where we would draw
      //start = i * 8;
      start = i * 50 ;
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
      
  
    ctx.fillStyle = "black";
    ctx.fillRect(start, canvasRef.current.height - 80, bar_width, 30 + (-songData[i] - 150) * 0.9);
    
    ctx.fillStyle = "red";
    ctx.fillRect(start, canvasRef.current.height -80, bar_width, 200 + (-songData[i] - 150) * 0.5 );
    
    ctx.fillRect(start, canvasRef.current.height, bar_width, -songData[i] );
    
      
    }
  };

  return (
    <div className="App">
      <div className="border border-red-700 max-w-container mx-auto flex flex-col">
      <div className="border border-black order-last flex w-[1390px]">
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
    <p>Trenutna vrijednost ref: {sliderValueRef.current}</p>
   
      <Slider
      defaultValue={sliderValueRef.current}
      min={3}
      max={48}
      //onChange={OnChangeEventTriggerd}
       
         />
     </div>

      </div>  
      
      <canvas ref={canvasRef} width={700} height={420}  className="mx-auto border border-red-700"/>

      </div>       
      <EditingSlider title={"milo title"} min={1} max={48} promena={promena}  OnChangeEventTriggerd={OnChangeEventTriggerd}  ></EditingSlider>
    
        <h1>{msg}</h1>
    </div>
  );
}