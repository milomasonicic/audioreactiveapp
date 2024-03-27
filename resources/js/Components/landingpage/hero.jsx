


export default function Hero (){

    return (
        <div className=" max-w-[1240px] mx-auto flex justify-around items-center min-h-[600px]">

            <div className="flex justify-between w-[550px] h-[550px] bg-heroImage bg-cover rounded-3xl">
                <div className="w-[120px] h-[120px] bg-homepage bg-cover rounded-full"></div>
                <div className="w-[120px] h-[120px] bg-hero1 bg-cover rounded-full"></div>               
            </div>

            <div className="max-w-[40%]">
                <h1 className="text-6xl font-bold font-caveat text-pink-400 mb-4 ">
                    We make anything audio<div className= "inline-block  transition ease-in-out delay-15 hover:scale-110 duration-300 hover:bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 hover:text-transparent hover:bg-clip-text">reactive...</div>
                    </h1>
                <p className="text-stone-400">Check out analyzers or make your own</p>
            </div>
    
        </div>
    )
}