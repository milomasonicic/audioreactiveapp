import { useRef, useState } from "react";

import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

import EditingSlider from '../sliders/slider'
import ColorPicker from '../sliders/colorpicker'


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

  //BAR COLOR
  const coloroneRef = useRef("#007af4")
  const colortwoRef = useRef("#00bb07")
 

  //poruka za promenu

  function promena(msg) {
    setMsg(msg)
  }

  //change of color

  function changeColor(color) {
    coloroneRef.current = color;
    console.log(sliderValueRef.current)
  }
  
  function changeSecondColor(color) {
    colortwoRef.current = color;
    
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
      
  
    ctx.fillStyle = coloroneRef.current;
    ctx.fillRect(start, canvasRef.current.height - 80, bar_width, 30 + (-songData[i] - 150) * 0.9);
    
    ctx.fillStyle = colortwoRef.current;
    ctx.fillRect(start, canvasRef.current.height -80, bar_width, 200 + (-songData[i] - 150) * 0.5 );
    
    ctx.fillRect(start, canvasRef.current.height, bar_width, -songData[i] );
    
      
    }
  };

  return (
    <div className="App flex">
      <div className="w-[800px] bg-red-700 flex flex-col">
      <div className="border border-black w-full order-last mx-auto flex-col h-[100px]">
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

      </div>       
   

      <canvas ref={canvasRef} width={790} height={420}  className="bg-white mx-auto border border-red-700"/>
      </div>  

      
<div>

      <ColorPicker changeColor={changeColor}  changeSecondColor={changeSecondColor} ></ColorPicker>
      <EditingSlider title={"milo title"} min={1} max={48} promena={promena}  OnChangeEventTriggerd={OnChangeEventTriggerd}  ></EditingSlider>
       
</div>
     
      

    </div>
  );
}