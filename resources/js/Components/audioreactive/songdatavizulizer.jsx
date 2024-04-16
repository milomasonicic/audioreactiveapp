import { useRef, useState } from "react";

import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

import EditingSlider from '../sliders/slider'
import NumSlider from '../sliders/numBarsslider'
import ColorPicker from '../sliders/colorpicker'
import ShapeSlider from '../sliders/changeShape'
import HeightSlider from '../sliders/heightSlider'

let animationController

export default function Bars() {
  const [file, setFile] = useState(null);
  const audioRef = useRef();
  const canvasRef = useRef();
  const source = useRef();
  const analyzer = useRef();

  //ref
  const sliderValueRef = useRef(13)
  const nubmerOfbarsRef = useRef(1.1)
  const randomnessRef = useRef(-60)
  const heightRef = useRef(-240)

  
  //const sliderValue = useState(23)

  //BAR COLOR
  const coloroneRef = useRef("#a9ccaa")
  const colortwoRef = useRef("#a9c2cc")
  const colorthreeRef = useRef("#070c01")
 

  //change of color

  function changeColor(color) {
    coloroneRef.current = color;
  }
  
  function changeSecondColor(color) {
    colortwoRef.current = color; 
  }

  function changeThirdColor(color) {
    colorthreeRef.current = color; 
  }

  //slider

  const OnChangeEventTriggerd = (newValue) => {
    sliderValueRef.current = newValue;
  };

  //slider

  const ChangeNumBaras = (newValue) => {
    nubmerOfbarsRef.current = newValue;

  };

  function changeShape(newValue) {
    console.log("shape", newValue)
    randomnessRef.current = newValue;
    
  }

  function heightChange(newValue) {
    heightRef.current = newValue; 
    console.log("h", newValue)  
  }

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
    const ctx = canvasRef.current.getContext("2d");
    animationController = window.requestAnimationFrame(visualizeData);
  
    const songData = new Uint8Array(140);
    analyzer.current.getByteFrequencyData(songData);
  
    const bar_width = sliderValueRef.current;
    const nubmerOfbars = nubmerOfbarsRef.current 
    let start = 0
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
      ctx.fillStyle = gradient;
      ctx.fillRect(start, canvasRef.current.height, bar_width, -songData[i]);
      
    }
  };

  return (
    <div className="App flex flex-col md:flex-row bg-gray-50 md:h-[590px] h-[990px] ">
      <div className="max-w-[640px] mx-auto  flex flex-col pt-4">
      <div className="w-full order-last mx-auto h-[100px]">
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
   

      <canvas ref={canvasRef}   className="max-w-[98%] h-[300px] md:h-[400px] bg-white border border-black mx-auto"/>
      </div>  

      
    <div className="max-w-[640px] mx-auto h-[250px] flex-col pt-8">


        <div className="pl-4 md:pl-0 ">
          
        <EditingSlider title={"Bar Width"} min={1} max={45} OnChangeEventTriggerd={OnChangeEventTriggerd}></EditingSlider>
        <NumSlider title={"Number of bars"} min={0.1} max={6} ChangeNumBaras={ChangeNumBaras}></NumSlider>
        <ShapeSlider title={"Height of bars"} min={-400} max={400} changeShape={changeShape}></ShapeSlider>
        <HeightSlider title={"Height of bars 2"} min={-400} max={200} heightChange={heightChange}></HeightSlider>
     
        </div>
        <div className="mt-10 md:mt-4">
         <ColorPicker changeColor={changeColor}  changeSecondColor={changeSecondColor} changeThirdColor={changeThirdColor} ></ColorPicker>
        </div>
       
  </div>
     
    </div>
  );
}