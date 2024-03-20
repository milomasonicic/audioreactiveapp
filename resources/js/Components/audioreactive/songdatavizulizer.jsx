import { useRef, useState } from "react";

import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

import EditingSlider from '../sliders/slider'
import NumSlider from '../sliders/numBarsslider'


import Gradiantvalue from "../sliders/gradiantvalue";
import GradiantvalueOne from  "../sliders/gradiantvalueone"
import GradiantvalueTwo from "../sliders/gradiantvaluetwo"
//import ColorPicker from '../sliders/colorpicker'
import ShapeSlider from '../sliders/changeShape'
import HeightSlider from '../sliders/heightSlider'

import GradientPicker from "../sliders/colorpickergradinet";


let animationController;

export default function Num() {
  const [file, setFile] = useState(null);
  const [msg, setMsg] = useState("Poruka za promeni");
  const canvasRef = useRef();
  const audioRef = useRef();
  const source = useRef();
  const analyzer = useRef();

  //ref
  const sliderValueRef = useRef(23)
  const nubmerOfbarsRef = useRef(1)
  const randomnessRef = useRef(1)
  const heightRef = useRef(80)
  
  //const sliderValue = useState(23)

  //BAR COLOR
  const gradientcolorRef = useRef("#007af4")
  const gradientcolor1Ref = useRef("#00bb07")
  const gradientcolor2Ref = useRef("#D0bb07")
  
  //gradient valuer
  const gradientvalueRef = useRef(0.1)
  const gradientvalueoneRef = useRef(0.5)
  const gradientvaluthwoRef = useRef(0.9)
 

  //change of color

  function changeGradient(color) {
    gradientcolorRef.current = color;
    console.log(sliderValueRef.current)
  }
  
  function changeGradientOne(color) {
    gradientcolor1Ref.current = color; 
  }

  function changeGradientTwo(color) {
    gradientcolor2Ref.current = color; 
  }

  //slider

  const OnChangeEventTriggerd = (newValue) => {
    
    console.log("new Value", newValue);
    sliderValueRef.current = newValue;
    console.log(sliderValueRef.current)
  };

  //slider

  const gradientValue = (newValue) => {
    
    console.log("new Value", newValue);
    gradientvalueRef.current = newValue;
   
  };

  const gradientValueOne = (newValue) => {
    
    console.log("new Value", newValue);
    gradientvalueoneRef.current = newValue;
   
  };

  const gradientValueTwo = (newValue) => {
    
    console.log("new Value", newValue);
    gradientvaluthwoRef.current = newValue;
   
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
  
    const songData = new Uint8Array(140);
    analyzer.current.getByteFrequencyData(songData);
  
    const bar_width = sliderValueRef.current;
    const nubmerOfbars = nubmerOfbarsRef.current 
    let start = canvasRef.current.width
    const ctx = canvasRef.current.getContext("2d");
    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    for (let i = 0; i < songData.length; i++) {
      start = i * 20;

      let gradient = ctx.createLinearGradient(
        0,
        0,
        canvasRef.current.width,
        canvasRef.current.height
      );
      gradient.addColorStop(gradientvalueRef.current, gradientcolorRef.current);
      gradient.addColorStop(gradientvalueoneRef.current, gradientcolor1Ref.current);
      gradient.addColorStop(gradientvaluthwoRef.current, gradientcolor2Ref.current);


      ctx.font = "44px Arial" 
      ctx.fillStyle = gradient;
     ctx.fillText("Lorem ipsum dolor sit amet", -300 + canvasRef.current.height,  250 + songData[i] * 0.1 );  
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

      <GradientPicker changeGradient={changeGradient} changeGradientOne={changeGradientOne} changeGradientTwo={changeGradientTwo} ></GradientPicker>
      <div>
        <Gradiantvalue title={"Gradient value"} min={0.1} max={0.9} gradientValue={gradientValue} ></Gradiantvalue>
        <GradiantvalueOne title={"Gradient value TWO"} min={0.1} max={0.9} gradientValueOne={gradientValueOne} ></GradiantvalueOne>
        <GradiantvalueTwo title={"Gradient value 3"} min={0.1} max={0.9} gradientValueTwo={gradientValueTwo} ></GradiantvalueTwo>
       
       
      </div>
       
</div>
     
      

    </div>
  );
}