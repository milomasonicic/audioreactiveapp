import { useRef, useState } from "react";

//RED NUMBERS COMPONENT

let animationController;

export default function Smile (params) {

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
    let gradient = ctx.createLinearGradient(0, 0, 200, 0);
    gradient.addColorStop(0, "green");
    gradient.addColorStop(0.7, "white");
    gradient.addColorStop(1, "pink");
    ctx.fillStyle = gradient;
  
   
    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    for (let i = 0; i < songData.length; i++) {

            // Update smiley size based on songData
        let scale = 1 + songData[start] / 255; // Adjust scale based on songData

        let gradient = ctx.createLinearGradient(0, 0, 200, 0);
gradient.addColorStop(0, "green");
gradient.addColorStop(0.7, "white");
gradient.addColorStop(1, "pink");

//oko
 // eye pupils

 

 //usta
 // draw the mouth - using the partially supported ctx.ellipse for the rotation angle
 ctx.beginPath(); // alternative to ctx.moveTo
 ctx.ellipse(315, 350, 25, 10, 85, 0, Math.PI*2);
 ctx.stroke();


 //left eye
 ctx.beginPath();
 ctx.arc(75, 75, 50, 0, Math.PI * 2, false);
 ctx.stroke();

 //iris
 ctx.beginPath();
 ctx.arc(75, 75, 30, 0, Math.PI * 2, false);
 ctx.stroke();
 ctx.fillStyle = "black";
 ctx.fill();
 //pupil
 ctx.beginPath();
 ctx.arc(75, 75, 15, 0, Math.PI * 2, false);
 ctx.stroke();
 ctx.fillStyle = "blue";
 ctx.fill();


        
        
        // Face
ctx.strokeStyle = gradient;
ctx.beginPath();
ctx.arc(145, 145, 160, 0, Math.PI * 4);
ctx.closePath();
ctx.lineWidth = 12 * scale;
ctx.stroke();


var p = new Path2D("m 75.8672,80.4954 c -0.6572,-0.0938 -2.252,-0.4688 -2.627,-0.375 -1.0313,0.1875 0.375,1.501 -0.1875,1.876 -0.4688,0.1875 -1.0313,-0.0938 -1.501,0.0938 -0.1875,0.0938 0.0938,0.4688 -0.0938,0.6572 -0.9375,0.75 -2.4385,0.8438 -3.377,1.6875 -1.125,1.0322 2.0635,3.6582 0.6572,4.6904 -3.2832,2.3447 -1.2197,-1.5947 -3.377,1.501 -0.2813,0.375 0.8438,0.4688 1.0313,0.9375 0.1875,0.376 -0.9375,0.2822 -0.9375,0.6572 0,0.1875 0.9375,1.4072 0.5625,1.876 -1.0313,1.0313 -2.5322,-0.5635 -3.4707,-0.5635 -1.4063,0 1.3135,1.3135 -1.0313,0.6572 -0.6572,-0.1875 -1.501,-1.2197 -1.7822,-1.7822 -0.1875,-0.1875 -0.376,-0.751 -0.4697,-0.5625 -0.375,0.5625 -0.2813,1.2188 -0.6563,1.6875 -1.2188,1.5947 -2.9082,0 -4.3145,0.4697 -0.1875,0.0938 0.1875,0.4688 0,0.6563 -0.8447,0.4688 -2.5332,0.375 -3.377,0 0,0 0,-0.0938 0.0938,-0.0938 0.4688,-0.4688 1.0313,-0.9375 1.2197,-1.4072 3.2822,0.1875 -0.4697,-2.0635 -1.4072,-2.626 -0.6563,-0.375 0.375,-1.5947 0.1875,-2.0635 -0.1875,-0.4697 -1.6885,0.8438 -1.3135,-0.376 0.2813,-0.8438 2.0635,-1.5938 1.4072,-2.1572 -0.4688,-0.375 -2.627,-0.1875 -2.4385,-1.3125 0.1875,-1.501 2.5322,-1.126 2.7197,-3.002 -0.0938,0 -0.0938,0 -0.1875,0 0.5625,0.0938 1.126,0.1875 1.7822,0.2813 0.75,0.0938 1.501,0.6563 2.251,0.75 0.751,0.0938 1.501,-0.4688 2.252,-0.375 0.4688,0.0938 0.75,0.751 1.2188,0.751 0.1875,0.0938 0.0938,-0.4697 0.2813,-0.5635 0.4697,-0.4688 1.2197,-0.6563 1.6885,-1.2188 0.376,-0.2822 0.0938,-0.9385 0.376,-1.2197 1.7813,-1.4072 3.6582,0.375 5.3457,-0.375 0.5635,-0.2813 0.6572,-1.126 1.2197,-1.3135 0.0938,-0.0938 3.1895,0.375 3.2832,0.2813 0.2813,-0.0938 -0.2813,-0.4688 -0.375,-0.75 -0.2813,-1.501 0.8438,-1.876 2.251,-1.876 0.3752,0 1.1262,2.9072 3.0959,4.502 l 0,0 z");
ctx.stroke(p);
ctx.fill(p);
 

// Right eye
ctx.strokeStyle = 'red';
ctx.beginPath();
ctx.moveTo(210, 70);
ctx.lineTo(180, 110);
       
ctx.moveTo(170, 70);
ctx.lineTo(215, 100);
ctx.lineWidth = 7;
ctx.stroke();



        
    }
  };

    
    return(
        <div className="App">
        
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
      <canvas ref={canvasRef} width={1000} height={1000} />
    </div>
    )
} 

