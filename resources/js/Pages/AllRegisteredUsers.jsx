import { router } from '@inertiajs/react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';


export default function Users({auth, users}) {
   
    function handleDeleteClick(id)  {
        router.delete(`udelete/${id}`)
      } 
      

    return (
        <div>
         <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight"> List of users </h2>}
        >
        <div className='max-w-[1240px] mx-auto'>
        <table class=" mt-12 w-[90%] mx-auto text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-2 md:px-6 md:py-3">
                    User
                </th>
               
               
                <th scope="col" class="px-2 md:px-6 md:py-3">
                    Delete
                </th>

                  
               
            </tr>
        </thead>
        <tbody>

        {users.map((user, index) => (
               
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={index}>
            <th scope="row" class="px-1 md:px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <ul>
                    <li>
                        Name: {user.name}

                    </li>

                    <li>
                        Email:  {user.email}
                    </li>
                </ul>            
            </th>
            
            <td>
            {user.email === 'admin@admin.com' ? 
                <span className='font-extrabold text-black-400'> Can not Delete </span> : 
                <button onClick={() => handleDeleteClick(user.id)}
                class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-blue-300  rounded-lg text-sm px-2 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                    Delete
                </button>
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




