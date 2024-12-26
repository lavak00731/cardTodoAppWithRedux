import { useId } from "react"

export const Login = () => {

  const id = useId();
  const handleSubmit = (e:Event) => {
    e.preventDefault();
    
  }

  return (
    <main className="bg-gray-600">
      <div className="container mx-auto flex flex-col justify-center items-center h-screen">
        <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg mt-20">
          <h1 className="font-sans text-6xl antialiased font-semibold leading-normal mb-2 text-center">Login</h1>
          <form action="" onSubmit={(e) => { handleSubmit(e) }} className="flex flex-col">
            <div className="flex flex-col mb-4">            
              <label className="text-gray-900 mb-1" htmlFor={id+'_user'}>Username</label>
              <input className="bg-gray-800 text-white p-2 rounded-md" id={id+'_user'} name="user" type="text" required/>  
            </div>
            <div className="flex flex-col mb-4">
              <label className="text-gray-900 mb-1" htmlFor={id+'_password'}>Password</label>
              <input className="bg-gray-800 text-white p-2 rounded-md" id={id+'_password'} name="password" type="password" required />  
            </div>
            <div className="flex flex-col justify-center">            
              <button className="bg-blue-900 text-white p-2 rounded-md" type="submit">Login</button>  
            </div>
          </form>         
        </div>        
      </div>
    </main>
  )
}
