
import Canvas2 from "../audioreactive/canvas2"
import Canvas3 from "../audioreactive/canvas3"


export default function About() {

    return (
        <div className='max-w-[1240px] mx-auto h-[550px] md:h-[420px] flex md:flex-row md:justify-between flex-col  mt-14'>
            
            <div className=" pl-4 mb-[35px] w-[95%] md:w-[50%] md:pl-12 md:pt-12">
                <h1 className="text-6xl pb-6 font-bold font-caveat text-sky-400">
                    About us
                </h1>
                <p className="text-stone-400">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi error accusamus eos inventore numquam minima aliquid dolore nam reprehenderit, repudiandae consequuntur laudantium pariatur beatae? Vitae labore vel reiciendis quidem reprehenderit!
                </p>
            </div>

            <div className="md:block hidden">
                <Canvas2></Canvas2>
            </div>
            <div className="">
                <Canvas3></Canvas3>
            </div>

        </div>
    )
}