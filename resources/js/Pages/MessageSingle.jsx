import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { format } from  'date-fns';


export default function Single({message, auth}) {
    const formattedDate = format(new Date (message.created_at), 'dd/MM/yyyy HH:mm:ss');


    return (
        <div>
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">  </h2>}
        >
            <div className='pl-4 pt-4 max-w-[1240px] mx-auto'>
                <h1 className='text-2xl font-semibold mb-2'>Name</h1>
                <input type="text"
                value={message.name}
                readOnly
                className='w-4/5 md:w-1/2 p-2 rounded bg-white-100'  />

                <h1 className='text-2xl font-semibold mt-2 mb-2'>Created At</h1> 
                <input type="text"
                value= {formattedDate }
                readOnly
                className='w-4/5 md:w-1/2 p-2 rounded bg-white-100'  />
            
                   
                <h1 className='text-2xl font-semibold mt-2 mb-2'>Email</h1> 
                <input type="text"
                value= {message.email}
                readOnly
                className='w-4/5 md:w-1/2 p-2 rounded bg-white-100'  />
                <h1 className='text-2xl font-semibold mb-2'>Message content</h1>
               
                <textarea
                readOnly
                className='w-4/5 md:w-1/2 p-2 rounded bg-white-100' 
                rows='6'
                value={message.content} />
            </div>
        
        </AuthenticatedLayout>    
        </div>
    )
}