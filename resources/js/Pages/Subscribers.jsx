export default function Subscribers ({subscribers}) {


    return (
        <div>
            <h1>Subscriber</h1>

            {subscribers.map((subscriber, index ) => (
              
              <div key={index}>
                <p>index {subscriber.id}, email {subscriber.email}</p>

              </div>

            ))}
           
        </div>
    )

}