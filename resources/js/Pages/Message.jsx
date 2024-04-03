
import { Head } from '@inertiajs/react'
import {useState} from  "react"
import { router } from '@inertiajs/react'

export default function Welcome({ messages }) {

  const [values, setValues] = useState({
    id: " ",
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
      router.post('/mdelete', values)
    }


  return (
    <div>

      <h1>Hi</h1>



    

<div class="relative overflow-x-auto">
    <table class="w-[75%] text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Name
                </th>
                <th scope="col" class="px-6 py-3">
                    email
                </th>
                <th scope="col" class="px-6 py-3">
                    Content
                </th>
               
            </tr>
        </thead>
        <tbody>

        {messages.map((message, index) => (
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={index}>
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
             {message.name}
            </th>
            <td class="px-6 py-4">
            {message.email}
            </td>
            <td class="px-6 py-4">
            {message.content}
            </td>
            
        </tr>
      ))}

          
            
        </tbody>
    </table>
</div>


     

    </div>
 
   
  )
}