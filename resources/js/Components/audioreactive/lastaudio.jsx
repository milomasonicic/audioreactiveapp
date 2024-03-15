import { useRef, useState } from "react";



export default function Last() {
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
          analyzer.current.fftSize = 256;

          // add

          console.log(analyzer.current, source.current, analyzer.current )
        }
      
      };

      const drawVisualizer = () => {

        requestAnimationFrame(drawVisualizer);
  
  const bufferLength = analyzer.frequencyBinCount;
  const dataArray = new Uint8Array(bufferLength);
  analyzer.getByteFrequencyData(dataArray);
  
  const width = visualizer.width;
  const height = visualizer.height;
  const barWidth = 10;


  const canvasContext = visualizer.getContext('2d');
  canvasContext.clearRect(0, 0, width, height);
  let x = 0;
  dataArray.forEach((item, index,array) => {
   const y = item / 255 * height*1.1;
   canvasContext.strokeStyle = `blue`;
   x = x + barWidth;
   canvasContext.beginPath();
   canvasContext.lineCap = "round";
   canvasContext.lineWidth = 2;
   canvasContext.moveTo(x, height);
   canvasContext.lineTo(x, height - y);
   canvasContext.stroke();
  })




      }
  

    return (
        <div className="App">
            last
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