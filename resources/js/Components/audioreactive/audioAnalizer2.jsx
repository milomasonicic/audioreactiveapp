import { useRef, useState, useEffect } from "react";
import AudioMotionAnalyzer from 'audiomotion-analyzer';

export default function AudioAnalyzer2(params) {
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
      
        height: 350,
        width: containerRef.current.width,
        fsElement: container,
        mode: 10,
        gradient: 'classic',
        lineWidth: 1.5,
        fillAlpha: .1,
        showPeaks: true,
        outlineBars: true,
        peakLine: true,
        radius: 0.9,
        reflexAlpha: 0.55,
        
      }
      )  
      
    };
   
  return (
      <div className="App m-4" >
    
         <input
         className="w-[70%]"
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
    <div className="mt-5">
      <div ref={containerRef} />
    </div>

  </div>
  );
  
};