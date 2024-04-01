export default function Newsletter(){

    return (
        <div class="bg-gradient-to-r from-pink-300 via-green-300 to-sky-300 ... border-y-2 border-dashed border-[#f4fc03]">
              <div className=" max-w-[1240px] min-h-[300px] mx-auto flex justfy-center">
                <div className="w-[65%] mx-auto pt-20">
                    <h1> SUbsivite</h1>
                    <p>We won t bother you much</p>
                <input type="text" />
                <button type="button" onClick={()=>changeColor(color)}   class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">SEND</button>

                </div>
        </div>

        </div>
      
    )
}