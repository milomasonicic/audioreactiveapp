import React, {useRef, useState } from 'react';



export default function LoadSound(params) {

    
    const [selectedFile, setSelectedFile] = useState(null)
    const [anlys, setAnlys] = useState(null)

    /**/ 
    
    const audioRef = useRef();
    const analyzer = useRef();
    const source = useRef();

    

    console.log("ja sam state", selectedFile)

    if(selectedFile !== null) {
        audio.src = URL.createObjectURL(selectedFile);
        let audioContext = new AudioContext();




       // var src = audioContext.createMediaElementSource(audio);
        var analyser = audioContext.createAnalyser();

       // console.log(analyzer.current);
        //analyzer.current.connect(audioContext.destination);


        //sr.connect(analyser);
        //analyser.connect(audioContext.destination);
        
        console.log(audioContext.sampleRate);

        console.log("great", audioContext, analyser, analyzer.current, audioContext.destinationnt)
        
    }


    const handleFile = (e) => {

        const file = event.target.files[0]; // Dobijamo referencu na prvu odabrnu datoteku
         // Možete prikazati u konzoli informacije o datoteci
        setSelectedFile(file)
       
    }
    
    return (
        <div>Hi
             <input type="file" id="thefile" accept="audio/*" onChange={handleFile} />
            <audio id="audio" controls></audio>
        </div>
    )
}