import React from "react"
import {useState} from  "react"
import { router } from '@inertiajs/react'
import { usePage } from '@inertiajs/react'

export default function ContactForm(){

    const [values, setValues] = useState({
        name: " ",
        email: "",
        content: " "
      })

      
  const { errors } = usePage().props  

    
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
    router.post('/mstore', values)
  }

    return (

        <div class="bg-gradient-to-r  h-[650px] flex justify-center items-center from-blue-600 via-orange-600 to-purple-600 ...">
              <div className=" max-w-[1240px] min-h-[300px] mx-auto flex justify-center"> 
                <div>
                    <h1 className="text-4xl font-mono font-bold text-stone-100 font-caveat mb-2 ml-4 md:ml-0"> contAct us</h1>
                    <p className="text-stone-100 mb-4 ml-4 md:ml-0"> Get in touch. Share your ideas.</p>
                    
                    <div>
                    {errors.email && (
                    <div id="danger">
                      {errors.name}  {errors.email}  {errors.content}
                    </div>
                    )}
                    </div>
                    
                    <form className="md:w-[600px] w-[90%] ml-4 md:ml-0"  onSubmit={handleSubmit}>
                    <div className="md:inline">
                      <label htmlFor="name" className="text-stone-100">Name:</label>
                       <input className="mb-2 md:w-[220px] w-[90%]" id="name" value={values.name} onChange={handleChange} />
                    </div>
                    <div className="md:inline">
                     <label htmlFor="email" className="text-stone-100 md:ml-4" >Email:</label>
                     <input id="email" className="mb-2 md:w-[220px] w-[90%]" value={values.email} onChange={handleChange} />
                    </div>  
                     <textarea id="content" className="w-[90%] md:w-[550px] mb-2" value={values.content} onChange={handleChange}  name="content" cols="30" rows="10"></textarea>
                    
                     <button type="submit" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 ml-[3px]">Send</button>
                  
                    </form>
                   

                </div>

               
        </div>

        </div>
      
    )
}

/*  <!--textarea className="w-[550px]" name="" id="" cols="30" rows="10"></textarea--> */
/*<button type="button" onClick={()=>changeColor(color)}   class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">SEND</button>*/