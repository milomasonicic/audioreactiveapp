
import { router } from '@inertiajs/react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';



export default function Welcome({ messages, auth }) {


  function changePage(id){
    router.get(`mcontnent/${id}`)
  }

  function statuRead() {
    status.current = 'Read'; 
  }

  
 function handleButtonClick(id) {
     changePage(id)
     setStatustoOne()
    
  }

  function handleDeleteClick(id)  {
    router.delete(`mdelete/${id}`)
  } 
  
  return (
    
    <div>

<AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight"> See what is new! </h2>}
        >
       

        <div class="relative overflow-x-auto mx-auto " className="max-w-[1240px] mx-auto">
    <table class=" mt-12 w-[95%] text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
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
                <th scope="col" class="px-6 py-3">
                    Delete
                </th>

                <th scope="col" class="px-6 py-3">
                    Status
                </th>

               
               
            </tr>
        </thead>
        <tbody>

        {messages.map((message, index) => (
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={index}>
            <th scope="row" class=" px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
             {message.name}
            </th>
            <td class="px-6 py-4">
            {message.email}
            </td>
            <td class="px-6 py-4">
            
            
            <button 
            onClick={() => {handleButtonClick(message.id); statuRead()}}
           
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"> See the messages</button>
           
            </td>
            <td>
            <button 
            onClick={() => handleDeleteClick(message.id)}
            class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"> Delete</button>
            </td>

            <td>
               
                     {message.status === 1 ? 
                      <span className='font-extrabold text-green-400'> Read </span> : <span className='font-extrabold text-red-400'> New</span>
                       }

                
            </td>
        </tr>
      ))}

          
            
        </tbody>
    </table>
</div>

        
        </AuthenticatedLayout> 

    </div>
 
   
  )
}