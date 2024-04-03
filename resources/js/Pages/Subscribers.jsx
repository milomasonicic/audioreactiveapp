import React from "react"
import {useState} from  "react"
import { router } from '@inertiajs/react'



export default function Subscribers ({subscribers}) {

  const [values, setValues] = useState({
    content: " ",
    subject: "",
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
  router.post('/subscriberMail', values)
  }

    return (
        <div>
            <h1>Subscriber</h1>

            <h1>Send Mail To all Users</h1>

            <form className="w-[400px]"  onSubmit={handleSubmit}>
                        

                    
                    
                       <label htmlFor="subject">Subject:</label>
                       <input id="subject" value={values.subject} onChange={handleChange} />
  
                       <label htmlFor="content">Your message:</label>
                       <textarea id="content" value={values.content} onChange={handleChange}  name="content" cols="30" rows="10"></textarea>
                       
  
  
                       <button type="submit">Submit</button>
                      
                      
                      
                      </form>

            {subscribers.map((subscriber, index ) => (
              
              <div key={index}>
                <p>index {subscriber.id}, email {subscriber.email}</p>
              </div>

            ))}
           
        </div>
    )

}