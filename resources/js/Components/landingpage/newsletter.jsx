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
                <div className="w-[65%] mx-auto pt-20">

                    <form className="w-[400px]" onSubmit={handleSubmit}>
                    <label htmlFor="email">Email:</label>
                     <input id="email" value={values.email} onChange={handleChange} />


                    <button type="submit">Submit</button>
                    </form>

                </div>
            </div>

        </div>
      
    )
}