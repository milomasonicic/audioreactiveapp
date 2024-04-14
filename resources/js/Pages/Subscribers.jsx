import React from "react"
import {useState} from  "react"
import { router } from '@inertiajs/react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';



export default function Subscribers ({subscribers, auth}) {

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

        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight"> Subscribers page </h2>}
        > 
       
          <div className="max-w-[1240px] mx-auto">

          
            <h1 className="text-3xl">Subscriber</h1>

            <h1>Send Newsletter To all Subscribed Users</h1>

            <form className="w-[400px]"  onSubmit={handleSubmit}>
                            
                       <h1>Subject:</h1>
                       <input id="subject" value={values.subject} onChange={handleChange} />
           
                       <h1>Message:</h1>
                       <textarea id="content" value={values.content} onChange={handleChange}  name="content" cols="30" rows="10"></textarea>
                       
  
                      <div>
                       <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" >Submit</button>
                      </div>
                      
                      
                      
            </form>

            <h1 className="text-3xl">Subscribed Users Emails</h1>

            {subscribers.map((subscriber, index ) => (
              
              <div key={index}>
                <p>index {subscriber.id}, email {subscriber.email}</p>
              </div>

            ))}

          </div>
          </AuthenticatedLayout>
        </div>
    )

}