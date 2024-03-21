import { useRef, useState } from "react";

import EditingSlider from '../sliders/slider'
import CircularSlider from '@fseehawer/react-circular-slider';


import Gradiantvalue from "../sliders/gradiantvalue";
import GradiantvalueOne from  "../sliders/gradiantvalueone"
import GradiantvalueTwo from "../sliders/gradiantvaluetwo"
//import ColorPicker from '../sliders/colorpicker'

import RotationSlider from "../sliders/circularSlider"
import ShapeSlider from '../sliders/changeShape'
import HeightSlider from '../sliders/heightSlider'

import GradientPicker from "../sliders/colorpickergradinet";


let animationController;

export default function Num() {
  const [file, setFile] = useState(null);
  const canvasRef = useRef();
  const audioRef = useRef();
  const source = useRef();
  const analyzer = useRef();

  //ref
  const sliderValueRef = useRef(23)
  const nubmerOfbarsRef = useRef(1)
  const randomnessRef = useRef(1)

  const heightRef = useRef(80)

  //rotation value
  const rotationRef = useRef(180)

  //fontRef
  const fontRef = useRef(72)

  //start
  const startRef = useRef(0)
  
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

  //rotaton change
  function changeAngle(value) {
    rotationRef.current = value;
   console.log(rotationRef.current, "angle")
  }

  function changeFontSize(value) {
    fontRef.current = value;
   console.log( fontRef.current, "font size")
  }

  //slider

  const OnChangeEventTriggerd = (newValue) => {
    
    console.log("new Value", newValue);
    sliderValueRef.current = newValue;
    console.log(sliderValueRef.current)
  };

  const OnChangeHeight = (newValue) => {
    
    console.log("new Value", newValue);
    heightRef.current = newValue;
    //console.log(sliderValueRef.current)
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
    let start = startRef.current
    let start01 = 50
    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    for (let i = 0; i < songData.length; i++) {
      // compute x coordinate where we would draw
      //start = i * 8;
      startRef.current = i * 50 ;
     // start01 = i * 50 
  
      //create a gradient for the  whole canvas

      let gradient = ctx.createLinearGradient(
        0,
        0,
        canvasRef.current.width,
        canvasRef.current.height
      );
      gradient.addColorStop(0.2, gradientcolorRef.current);
      gradient.addColorStop(0.5, gradientcolor1Ref.current);
      gradient.addColorStop(0.4, gradientcolor2Ref.current);
     

    
    
    
    //text
    var fontSize = `${fontRef.current}px Arial`
  
   // ctx.font = fontSize;
    var fontSize1 = fontRef.current.toString()    
    ctx.font = fontSize1 + "px Arial"
    ctx.fillStyle = gradient;
    
    //text    
    ctx.save()
    ctx.translate(startRef.current * bar_width, heightRef.current + -songData[i] * 0.2 )
    
    ctx.rotate(rotationRef.current)
    
    ctx.fill();
    ctx.fillText(songData[i], 0, 0)

  //ctx.fillText(songData[i],  startRef.current * bar_width, heightRef.current + -songData[i] * 0.2 );
     ctx.restore() 

     
     
    }
  };

  

  return (
    <div className="App flex">
      <div className="w-[800px] bg-red-700 flex flex-col h-[600px]">
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
      
        <h1>bars</h1>

        <EditingSlider title={"Density"} min={2} max={8} OnChangeEventTriggerd={OnChangeEventTriggerd}></EditingSlider>
        <EditingSlider title={"Height"} min={10} max={400} OnChangeEventTriggerd={OnChangeHeight}></EditingSlider>
        

        <h1>circular</h1>

        <h1> Angle</h1>
        <CircularSlider 

        width={100}
        height={100}
        min={1}
        max={360}
        onChange={(value) => changeAngle(value)}></CircularSlider>
         
        <h1>Font</h1>

        <CircularSlider 

          width={100}
          height={100}
          min={1}
          max={72}
          onChange={(value) => changeFontSize(value)}></CircularSlider>
       
     
 
</div>
 
</div>
     
      

    </div>
  );
}