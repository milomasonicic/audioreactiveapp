


export default function Hero (){

    return (
        <div className="md:bg-none bg-heroImage bg-cover bg-center bg-no-repeat  max-w-[1240px] mx-auto flex-column pl-[8px] md:pl-[0px] md:flex md:justify-around md:items-center md:h-[620px] h-[800px]">


            <div className=" w-[100%] md:max-w-[40%] h-[75%]">
                <h1 className="md:mt-[58px] text-6xl pt-[65px]  md:pt-[0px] font-bold font-caveat text-pink-400 mb-4 ">
                    We make anything audio<div className= "inline-block  transition ease-in-out delay-15">reactive...</div>
                </h1>
                <p className="text-stone-100  md:text-stone-400 ">Check out analyzers or make your own</p>
            </div>
            <div className="mt-[50px] md:mt-[0px]   md:flex md:justify-between max-w-[98%] md:w-[550px] h-[350px] md:h-[550px] md:bg-heroImage bg-cover rounded-3xl">
                <div className="md:w-[120px] md:h-[120px] w-[150px] h-[150px]  bg-homepage bg-cover rounded-full"></div>
                <div className="md:w-[120px] md:h-[120px] w-[150px] h-[150px] mt-[5px] md:mt-[0px] bg-hero1 bg-cover rounded-full"></div>               
            </div>

            
    
        </div>
    )
}