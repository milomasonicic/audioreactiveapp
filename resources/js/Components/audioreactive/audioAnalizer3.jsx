import { useRef, useState, useEffect } from "react";
import AudioMotionAnalyzer from 'audiomotion-analyzer';

export default function AudioAnalyzer3(params) {
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
        height: window.innerHeight/1.5,
        width: window.innerWidth,
        fsElement: container,
        mode: 10,
        radial: 1,
        radialInvert: 5,
        gradient: 'prism',
        lineWidth: 2.5,
        fillAlpha: .4, 
        barSpace: .8,
        showPeaks: true,
        outlineBars: true,
        peakLine: true,
        radius: 0.9,
        reflexAlpha: 0.55,
        
      
      }
      )  
      
    };
   
  return (
      <div className="App" >
         Pokusaj
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
    <div ref={containerRef} width={500} height={200} />

  </div>
  );
  
};