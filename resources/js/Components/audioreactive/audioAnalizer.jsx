import { useRef, useState, useEffect } from "react";
import AudioMotionAnalyzer from 'audiomotion-analyzer';

export default function AudioAnalyzer(params) {
  const [file, setFile] = useState(null);
  const containerRef = useRef();
  const audioRef = useRef();
  const  audioMotionRef = useRef(null);

  const handleAudioPlay = () => {
      
    const container = containerRef.current;
    
  
      // audio source
    
      const audioEl = audioRef.current;

      audioMotionRef.current = new AudioMotionAnalyzer( container, {
          source: audioEl,
          height: 290,
          mode: 6,
          barSpace: 0.1,
          ledBars: true,
      }
      )  
      
    };
   
  return (
      <div className="App m-4" >

    <div className="border border-white w-[100%] ">
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
    <div className="overflow-hidden w-[80%] sm:w-[480px] md:w-[550px] lg:w-[800px]  m-4  mx-auto">
      <div  ref={containerRef} />
    </div>

  </div>
  );
  
};