


export default function Hero (){

    return (
        <div className=" max-w-[1240px] mx-auto flex-column pl-[8px] md:pl-[0px] md:flex md:justify-around md:items-center md:h-[620px] h-[800px]">


            <div className=" w-[100%] md:max-w-[40%] order-first ">
                <h1 className="text-6xl mt-[50px] md:mt-[0px] font-bold font-caveat text-pink-400 mb-4 ">
                    We make anything audio<div className= "inline-block  transition ease-in-out delay-15">reactive...</div>
                    </h1>
                <p className="text-stone-400">Check out analyzers or make your own</p>
            </div>
            <div className="mt-[50px]  md:flex md:justify-between max-w-[98%] md:w-[550px] h-[350px] md:h-[550px] md:bg-heroImage bg-cover rounded-3xl">
                <div className="md:w-[120px] md:h-[120px] w-[150px] h-[150px]  bg-homepage bg-cover rounded-full"></div>
                <div className="md:w-[120px] md:h-[120px] w-[150px] h-[150px] mt-[5px] md:mt-[0px] bg-heroImage bg-cover rounded-full md:hidden"></div>
                <div className="md:w-[120px] md:h-[120px] w-[150px] h-[150px] mt-[5px] md:mt-[0px] bg-hero1 bg-cover rounded-full"></div>               
            </div>

            
    
        </div>
    )
}