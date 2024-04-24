
import { router } from '@inertiajs/react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';



export default function Welcome({ messages, auth }) {



  function changePage(id){
    router.get(`mcontnent/${id}`)
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
       

        <div class="relative overflow-x-auto mx-auto " className="w-[95%] md:max-w-[1140px] mx-auto">
    <table class=" mt-12 w-[95%] text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Message
                </th>
                
                <th scope="col" class="px-6 py-3">
                    Status
                </th> 
               
            </tr>
        </thead>
        <tbody>

        {messages.map((message, index) => (
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={index}>
            <th scope="row" class="px-1 py-4 md:px-6 md:py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            <ul>
                <li>
                    Name: {message.name}
                </li>

                <li>
                    Email: {message.email}
                </li>

                <li className='flex'>
                <button 
                    onClick={() => {handleButtonClick(message.id); statuRead()}}
                
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"> Open</button>
                <button 
            onClick={() => handleDeleteClick(message.id)}
            class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"> Delete</button>

                
                </li>

                
            </ul>
                
            </th>
        
          

            <td>
               
                     {message.status === 1 ? 
                      <span className='font-extrabold text-green-400 text-base'> Read </span> : <span className='font-extrabold text-red-400 text-base'> New</span>
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