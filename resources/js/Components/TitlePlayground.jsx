import 'animate.css';

export default function Playground(){

    return(
        <div >
            <div className='flex transform transition duration-500 hover:scale-75'>

                <div>

                <span class="relative flex px-3 h-6 w-6">
                    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
                    <span class="relative inline-flex rounded-full h-3 w-3 bg-pink-400"></span>
                </span>
                </div>
                <div>

                <h1 className='font-mono font-bold text-2xl text-stone-400 '>
                    your    <span className="text-4xl font-bold font-caveat text-pink-400 mb-4">PLAY</span>ground
                </h1>
                </div>
            </div>
        </div>
    )
}