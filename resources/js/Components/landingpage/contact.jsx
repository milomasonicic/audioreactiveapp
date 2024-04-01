export default function ContactForm(){

    return (
        <div class="bg-gradient-to-r from-blue-600 via-orange-600 to-purple-600 ...">
              <div className=" max-w-[1240px] min-h-[300px] mx-auto flex justify-center"> 
                <div>
                    <h1 className="text-4xl font-mono font-caveat"> contAct us</h1>
                    <form action="" className="w-[400px]">
                        <h3>Name</h3>
    
                    <input className="w-[550px]" type="text" />
                    <h3>Emali</h3>
                    <input className="w-[550px]" type="email" />

                    <h5>Your message</h5>
                    <textarea className="w-[550px]" name="" id="" cols="30" rows="10"></textarea>

                      <button type="button" onClick={()=>changeColor(color)}   class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">SEND</button>
                    </form>

                </div>

               
        </div>

        </div>
      
    )
}