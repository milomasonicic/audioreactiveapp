import { useRef, useState, useEffect } from "react";
import AudioMotionAnalyzer from 'audiomotion-analyzer';



export default function Pokusaj(params) {
    const [file, setFile] = useState(null);
    const containerRef = useRef();
    const audioRef = useRef();
    const  audioMotionRef = useRef(null);
   
    useEffect(() => {
        console.log("mounth")
        return() => {
            console.log("unmounth")
            if(audioMotionRef.current) {
                audioMotionRef.current.destroy()
                
                audioMotionRef.current  = null
            }
        }
      }, []);

    const handleAudioPlay = () => {
        
        const container = containerRef.current;

        // audio source
        const audioEl = audioRef.current;

        audioMotionRef.current = new AudioMotionAnalyzer( null, {
            source: audioEl,
            height: window.innerHeight - 50,
            // you can set other options below - check the docs!
            mode: 3,
            barSpace: .6,
            ledBars: true,
        }
        )  
        
      };

     


    return (
        <div className="App">
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

 