import 'animate.css';

export default function Playground(){

    return(
        <div >
            <div className='mt-18 flex mx-auto'>

                <div>

                <span class="relative flex px-3 h-6 w-6">
                    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
                    <span class="relative inline-flex rounded-full h-3 w-3 bg-pink-400"></span>
                </span>
                </div>
                <div>

                <h1 className='font-caveat  font-bold text-4xl text-stone-400 '>
                    your    <span className="text-6xl font-bold text-green-400 mb-4">PLAY</span>ground
                </h1>
                </div>
            </div>
        </div>
    )
}