import { Link } from "react-router-dom"
import SignGoogle from "./SignGoogle"

const Signup = () => {
   return (
      <>
         <div className="py-10">
            <div className="flex rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl border border-primary border-opacity-30 bg-slate-100 bg-opacity-40">
               <div className="hidden lg:block lg:w-1/2 bg-cover" style={{ backgroundImage: "url('https://images.pexels.com/photos/2102416/pexels-photo-2102416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" }}></div>
               <div className="w-full p-8 lg:w-1/2">
                  <h1 className="cursor-pointer text-center text-3xl text-primary font-bold">VUDERA</h1>
                  <SignGoogle />
                  <form action="">
                     <div className="mt-4">
                        <label className="text-gray-900 text-sm font-bold mb-2 block">Nombre Completo</label>
                        <input type="text" className="w-full px-4 py-2 placeholder-gray-900 border border-gray-300 rounded-md focus:outline-primary focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="Nombre completo" />
                     </div>
                     <div className="mt-4">
                        <label className="text-gray-900 text-sm font-bold mb-2 block">Correo eléctronico</label>
                        <input type="email" className="w-full px-4 py-2 placeholder-gray-900 border border-gray-300 rounded-md focus:outline-primary focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="Correo eléctronico" />
                     </div>
                     <div className="mt-4">
                        <label className="text-gray-900 text-sm font-bold mb-2 block">Contraseña</label>
                        <input type="email" className="w-full px-4 py-2 placeholder-gray-900 border border-gray-300 rounded-md focus:outline-primary focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="Contraseña" />
                     </div>
                     <div className="text-start mt-3 flex gap-2">
                        <input type="checkbox"  />
                        <p className="text-black text-sm">I agree with the <span className="text-red-600 underline ">terms and conditions</span>.</p>
                     </div>
                     <input type="submit" value="Login" className="bg-primary font-bold text-white w-full py-2 px-4 mt-6 cursor-pointer rounded-md hover:bg-blue-700" />
                  </form>
                  <p className="text-sm text-gray-900 mt-4 text-center font-medium">Ya tiene cuenta? <Link to="/login" className="underline text-primary font-bold hover:text-indigo-700">Acceder</Link></p>
               </div>

            </div>
         </div>
      </>
   )
}

export default Signup