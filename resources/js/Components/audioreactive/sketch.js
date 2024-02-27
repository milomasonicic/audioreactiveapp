

//import "p5/lib/addons/p5.sound"


function sketch(p) {

    let rotation = 0
    var mySound

    /*p.preload = function () {
       console.log("hello from preload")
       mySound = p.loadSound('/audio/BeepBox-Song.wav')
    } */
   
    p.setup = function() {
        p.createCanvas(500, 500)
        //mySound = loadSound('/audio/BeepBox-Song.wav')
      
    }

    p.draw = function() {
        p.background(22, 22, 22)
   
        /*if(p.mouseIsPressed) {
            p.fill(0)
        } else {
            p.fill(255)
        }
        p.ellipse(p.mouseX, p.mouseY, 80, 80)*/
    }

  
}

export default sketch

