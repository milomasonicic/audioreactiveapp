export default function Footer () {

    const currentYear = new Date().getFullYear()

    return (
        <div>
            <div className="max-w-[1040px] h-[250px] mx-auto flex justify-between items-center ">

                <div className="bg-hero4 bg-cover bg-center w-[200px] h-[200px] rounded-full hidden md:block"></div>
                <div className="bg-hero6 bg-cover bg-center w-[200px] h-[200px] rounded-full hidden md:block"></div>
                <div className="bg-hero5 bg-cover bg-center w-full h-full md:w-[200px] md:h-[200px] md:rounded-full"></div>

            </div>
            <div className="w-full h-[40px] bg-slate-600 flex justify-center">
                <a href="" className="text-white pt-4 text-[12px]"> All rights reserved &copy; Audio Viz {currentYear} </a>
            </div>
        </div>
    )
}