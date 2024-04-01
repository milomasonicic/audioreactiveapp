import React from "react"
import {useState} from  "react"
import { router } from '@inertiajs/react'

export default function ContactForm(){

    const [values, setValues] = useState({
        last_name: "",
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
    router.post('/admin', values)
  }

    return (
        <div class="bg-gradient-to-r from-blue-600 via-orange-600 to-purple-600 ...">
              <div className=" max-w-[1240px] min-h-[300px] mx-auto flex justify-center"> 
                <div>
                    <h1 className="text-4xl font-mono font-caveat"> contAct us</h1>
                    <form action="" className="w-[400px]"  onSubmit={handleSubmit}>
                        

                    
                      <label htmlFor="last_name">Name:</label>
                    <input id="last_name" value={values.last_name} onChange={handleChange} />
                     <label htmlFor="email">Email:</label>
                     <input id="email" value={values.email} onChange={handleChange} />

                     <h5>Your message</h5>
                  

                    
                    
                      <button type="button" onClick={()=>changeColor(color)}   class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">SEND</button>
                    
                    
                    </form>

                </div>

               
        </div>

        </div>
      
    )
}

/*  <!--textarea className="w-[550px]" name="" id="" cols="30" rows="10"></textarea--> */