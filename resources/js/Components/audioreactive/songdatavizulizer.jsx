import { useRef, useState } from "react";

import EditingSlider from '../sliders/slider'
import CircularSlider from '@fseehawer/react-circular-slider';
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

  

  //change of color

  function changeGradient(color) {
    gradientcolorRef.current = color;
    
  }
  
  function changeGradientOne(color) {
    gradientcolor1Ref.current  = color; 
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
     
      startRef.current = i * 4 ;
     
    var fontSize1 = fontRef.current.toString()    
    ctx.font = fontSize1 + "px Arial"
    ctx.fillStyle = gradientcolorRef.current
    ctx.fillText("milo", 0, 0)
    
    //text    
    ctx.save()
    ctx.translate(startRef.current * bar_width, heightRef.current + -songData[i] * 0.9 )
    ctx.rotate(rotationRef.current)
    ctx.fillStyle = gradientcolorRef.current;
    ctx.fillText(songData[i], 0, 0)
    ctx.fillStyle = gradientcolor1Ref.current;
    ctx.fillText(songData[i], 100, 100)
    ctx.fillStyle = gradientcolor2Ref.current;
    ctx.translate(startRef.current * bar_width, heightRef.current + -songData[i] * 0.9 )
    ctx.fillText(songData[i], 50, 50) 
    ctx.restore() 

     
     
    }
  };

  

  return (
    <div className="App flex flex-col md:flex-row bg-gray-50 md:h-[590px] h-[990px]">
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
   

      <canvas ref={canvasRef} className="max-w-[98%] h-[300px] md:h-[400px] bg-white border border-black mx-auto"/>
      </div>  


        
      <div  className="max-w-[640px] mx-auto h-[250px] flex-col pt-8" >
    
      <div>

        <EditingSlider title={"Density"} min={2} max={8} OnChangeEventTriggerd={OnChangeEventTriggerd}></EditingSlider>
        <EditingSlider title={"Height"} min={10} max={400} OnChangeEventTriggerd={OnChangeHeight}></EditingSlider>
        

      <div className="flex pt-4 pb-4">
        <div className="mr-4">
        <CircularSlider 
        label=" "
        valueFontSize= "0 rem"
        center={null}
        width={70}
        height={70}
        knobPosition={0}
        knobSize= {12}
        min={1}
        max={360}
        onChange={(value) => changeAngle(value)}></CircularSlider>
         

        </div>
     

        <CircularSlider 
          label=" "
          valueFontSize= "0 rem"
          knobSize= {12}
          width={70}
          height={70}
          knobPosition={0}
          min={14}
          max={72}
          onChange={(value) => changeFontSize(value)}></CircularSlider>

      </div>

       
      </div>
      <div className="mt-10 md:mt-4">
        <GradientPicker changeGradient={changeGradient} changeGradientOne={changeGradientOne} changeGradientTwo={changeGradientTwo} ></GradientPicker>
      </div>
 
    </div>
     
      

    </div>
  );
}