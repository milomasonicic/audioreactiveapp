export default function Footer () {

    const currentYear = new Date().getFullYear()

    return (
        <div>
           
            <div className="w-full h-[40px] bg-slate-600 flex justify-center">
                <a href="" className="text-white pt-4 text-[12px]"> All rights reserved &copy; Audio Viz {currentYear} </a>
            </div>
        </div>
    )
}