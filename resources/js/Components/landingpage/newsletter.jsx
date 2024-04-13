import {useState} from  "react"
import { router } from '@inertiajs/react'


export default function Newsletter(){


    const [values, setValues] = useState({
        email: "",
      })


    
  function handleChange(e) {
    const key = e.target.id;
    const value = e.target.value
    setValues(values => ({
        ...values,
        [key]: value,
    }))

 
  }  

  function handleSubmit(e) {
    e.preventDefault()
    router.post('/subscriberstore', values)
  }

    return (
        <div class="bg-gradient-to-r from-pink-300 via-green-300 to-sky-300 ... border-y-2 border-dashed border-[#f4fc03]">
              <div className=" max-w-[1240px] min-h-[300px] mx-auto flex justfy-center">
                <div className="w-[90%] md:w-[85%] mx-auto pt-20">
                    <h1 className="text-6xl mb-[7px] font-caveat"> Newsletter</h1>
                    <h4 className="font-caveat text-2xl"> We will not bother you much.</h4>
                    <form className="" onSubmit={handleSubmit}>
                  
                     <input id="email" className="w-[370px| md:w-[450px] "  value={values.email} onChange={handleChange} />
                    
                        <button type="submit" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 ml-[3px]">Subscribe</button>
                     
                    </form>

                </div>
            </div>

        </div>
      
    )
}