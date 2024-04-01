
import { Head } from '@inertiajs/react'

export default function Welcome({ messages }) {
  return (
    <div>

      <h1>Hi</h1>
      {messages.map((message, index) => (
        <div key={index}>
          <p>Hello {message.name}</p>
          <p>Hello {message.email}</p>
          <p>Hello {message.content}</p>
        </div>
      ))}
     

    </div>
 
   
  )
}