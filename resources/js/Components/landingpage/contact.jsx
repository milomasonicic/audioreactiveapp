import { usePage} from '@inertiajs/react'
import { useForm } from '@inertiajs/react'

export default function ContactForm(){


      const { data, setData, reset, post} = useForm({
        name: " ",
        email: "",
        content: " "
      
      })    

      
  const { errors } = usePage().props  

    
 

  function handleSubmit(e) {
    e.preventDefault()
   post('/mstore', {
    preserveScroll:true,
    onSuccess: () => reset('email', 'name', 'content'),
      
   },data)

   
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
                       <input className="focus:ring focus:border-blue-500  mb-2 md:w-[220px] w-[90%]" id="name" value={data.name} onChange={(e)=>setData('name', e.target.value)} />
                    </div>
                    <div className="md:inline">
                     <label htmlFor="email" className="text-stone-100 md:ml-4" >Email:</label>
                     <input id="email" className="focus:ring focus:border-blue-500 mb-2 md:w-[220px] w-[90%]" value={data.email} onChange={(e)=>setData('email', e.target.value)} />
                    </div>  
                     <textarea id="content" className="focus:ring focus:border-blue-500 caret-blue-500 focus:caret-indigo-500 w-[90%] md:w-[550px] mb-2" value={data.content} onChange={(e)=>setData('content', e.target.value)}   name="content" cols="30" rows="10"></textarea>
                    
                     <button type="submit"  class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 ml-[3px]">Send</button>
                  
                    </form>
                   

                </div>

               
        </div>

        </div>
      
    )
}

