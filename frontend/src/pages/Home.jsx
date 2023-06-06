import { Link } from "react-router-dom"
import Banner from "./banners/Banner"


function Home() {
   return (
      <>
         <div className="md:py-10 space-y-12">
            <h1 className="text-center font-bold md:text-3xl text-2xl mx-5 my-5">Explorando el mundo del código: Descubre, aprende y domina la programación</h1>
            <form className="flex items-center justify-center px-5">
               <input type="text" placeholder="Busqueda ..." className="input input-bord clasered w-96 border-gray-800 border-2 placeholder:font-semibold font-semibold focus:border-gray-900 focus:ring-1 focus:ring-gray-800 " />
               <input type="submit" value="Buscar" className="btn bg-gray-200 text-black border-0 px-3 py-1 font-bold cursor-pointer ml-1 hover:bg-gray-950 hover:text-white w-28" />
            </form>
            <div className="flex justify-between md:mx-2 mx-5 items-center">
               <h1 className="text-gray-800 text-2xl font-bold md:text-3xl">Publicaciones Recientes</h1>
               <button className="bg-gray-200 py-1.5 px-3 md:py-2 md:px-3 font-bold text-blue-600 rounded-lg hover:bg-black hover:text-gray-50">Ver más</button>
            </div>

            <div className="flex justify-center">
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                  <div className="card card-compact md:w-96 w-[28rem] bg-white shadow-xl">
                     <figure><img src="https://images.pexels.com/photos/16756653/pexels-photo-16756653/free-photo-of-hombre-pareja-mujer-cafe.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Shoes" className="hover:scale-125 object-cover cursor-pointer" /></figure>
                     <div className="card-body">
                        <h2 className="card-title text-black cursor-pointer flex items-center justify-between">
                           Frontend Developer
                           <div className="badge badge-secondary px-4 py-3 text-blue-800">Javascript</div>
                        </h2>
                        <p className="text-gray-600">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores labore vero, cupiditate, assumenda neque quam, aut ab voluptate similique expedita sunt ratione nihil corrupti a itaque molestias corporis doloremque quaerat.</p>
                        <div className="card-actions justify-between mt-2 text-black">
                           <p className="font-semibold">Daniel Nuñez Rodas</p>
                           <time className="font-semibold">23-05-2023</time>
                        </div>
                        <div className="card-actions justify-center mt-3 items-center">
                           <Link className="px-3 py-2 rounded-md bg-gray-200 hover:bg-black text-base font-medium text-black hover:text-white items-center">Ver más <i className="fa-solid fa-right-long ml-2 mt-1"></i></Link>
                        </div>
                     </div>
                  </div>
                  <div className="card card-compact md:w-96 w-[28rem] bg-white shadow-xl">
                     <figure><img src="https://images.pexels.com/photos/16756653/pexels-photo-16756653/free-photo-of-hombre-pareja-mujer-cafe.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Shoes" className="hover:scale-125 object-cover cursor-pointer" /></figure>
                     <div className="card-body">
                        <h2 className="card-title text-black cursor-pointer flex items-center justify-between">
                           Frontend Developer
                           <div className="badge badge-secondary px-4 py-3 text-blue-800">Javascript</div>
                        </h2>
                        <p className="text-gray-600">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores labore vero, cupiditate, assumenda neque quam, aut ab voluptate similique expedita sunt ratione nihil corrupti a itaque molestias corporis doloremque quaerat.</p>
                        <div className="card-actions justify-between mt-2 text-black">
                           <p className="font-semibold">Daniel Nuñez Rodas</p>
                           <time className="font-semibold">23-05-2023</time>
                        </div>
                        <div className="card-actions justify-center mt-3 items-center">
                           <Link className="px-3 py-2 rounded-md bg-gray-200 hover:bg-black text-base font-medium text-black hover:text-white items-center">Ver más <i className="fa-solid fa-right-long ml-2 mt-1"></i></Link>
                        </div>
                     </div>
                  </div>
                  <div className="card card-compact md:w-96 w-[28rem] bg-white shadow-xl">
                     <figure><img src="https://images.pexels.com/photos/16756653/pexels-photo-16756653/free-photo-of-hombre-pareja-mujer-cafe.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Shoes" className="hover:scale-125 object-cover cursor-pointer" /></figure>
                     <div className="card-body">
                        <h2 className="card-title text-black cursor-pointer flex items-center justify-between">
                           Frontend Developer
                           <div className="badge badge-secondary px-4 py-3 text-blue-800">Javascript</div>
                        </h2>
                        <p className="text-gray-600">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores labore vero, cupiditate, assumenda neque quam, aut ab voluptate similique expedita sunt ratione nihil corrupti a itaque molestias corporis doloremque quaerat.</p>
                        <div className="card-actions justify-between mt-2 text-black">
                           <p className="font-semibold">Daniel Nuñez Rodas</p>
                           <time className="font-semibold">23-05-2023</time>
                        </div>
                        <div className="card-actions justify-center mt-3 items-center">
                           <Link className="px-3 py-2 rounded-md bg-gray-200 hover:bg-black text-base font-medium text-black hover:text-white items-center">Ver más <i className="fa-solid fa-right-long ml-2 mt-1"></i></Link>
                        </div>
                     </div>
                  </div>
                  <div className="card card-compact md:w-96 w-[28rem] bg-white shadow-xl">
                     <figure><img src="https://images.pexels.com/photos/16756653/pexels-photo-16756653/free-photo-of-hombre-pareja-mujer-cafe.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Shoes" className="hover:scale-125 object-cover cursor-pointer" /></figure>
                     <div className="card-body">
                        <h2 className="card-title text-black cursor-pointer flex items-center justify-between">
                           Frontend Developer
                           <div className="badge badge-secondary px-4 py-3 text-blue-800">Javascript</div>
                        </h2>
                        <p className="text-gray-600">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores labore vero, cupiditate, assumenda neque quam, aut ab voluptate similique expedita sunt ratione nihil corrupti a itaque molestias corporis doloremque quaerat.</p>
                        <div className="card-actions justify-between mt-2 text-black">
                           <p className="font-semibold">Daniel Nuñez Rodas</p>
                           <time className="font-semibold">23-05-2023</time>
                        </div>
                        <div className="card-actions justify-center mt-3 items-center">
                           <Link className="px-3 py-2 rounded-md bg-gray-200 hover:bg-black text-base font-medium text-black hover:text-white items-center">Ver más <i className="fa-solid fa-right-long ml-2 mt-1"></i></Link>
                        </div>
                     </div>
                  </div>
                  <div className="card card-compact md:w-96 w-[28rem] bg-white shadow-xl">
                     <figure><img src="https://images.pexels.com/photos/16756653/pexels-photo-16756653/free-photo-of-hombre-pareja-mujer-cafe.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Shoes" className="hover:scale-125 object-cover cursor-pointer" /></figure>
                     <div className="card-body">
                        <h2 className="card-title text-black cursor-pointer flex items-center justify-between">
                           Frontend Developer
                           <div className="badge badge-secondary px-4 py-3 text-blue-800">Javascript</div>
                        </h2>
                        <p className="text-gray-600">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores labore vero, cupiditate, assumenda neque quam, aut ab voluptate similique expedita sunt ratione nihil corrupti a itaque molestias corporis doloremque quaerat.</p>
                        <div className="card-actions justify-between mt-2 text-black">
                           <p className="font-semibold">Daniel Nuñez Rodas</p>
                           <time className="font-semibold">23-05-2023</time>
                        </div>
                        <div className="card-actions justify-center mt-3 items-center">
                           <Link className="px-3 py-2 rounded-md bg-gray-200 hover:bg-black text-base font-medium text-black hover:text-white items-center">Ver más <i className="fa-solid fa-right-long ml-2 mt-1"></i></Link>
                        </div>
                     </div>
                  </div>
                  <div className="card card-compact md:w-96 w-[28rem] bg-white shadow-xl">
                     <figure><img src="https://images.pexels.com/photos/16756653/pexels-photo-16756653/free-photo-of-hombre-pareja-mujer-cafe.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Shoes" className="hover:scale-125 object-cover cursor-pointer" /></figure>
                     <div className="card-body">
                        <h2 className="card-title text-black cursor-pointer flex items-center justify-between">
                           Frontend Developer
                           <div className="badge badge-secondary px-4 py-3 text-blue-800">Javascript</div>
                        </h2>
                        <p className="text-gray-600">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores labore vero, cupiditate, assumenda neque quam, aut ab voluptate similique expedita sunt ratione nihil corrupti a itaque molestias corporis doloremque quaerat.</p>
                        <div className="card-actions justify-between mt-2 text-black">
                           <p className="font-semibold">Daniel Nuñez Rodas</p>
                           <time className="font-semibold">23-05-2023</time>
                        </div>
                        <div className="card-actions justify-center mt-3 items-center">
                           <Link className="px-3 py-2 rounded-md bg-gray-200 hover:bg-black text-base font-medium text-black hover:text-white items-center">Ver más <i className="fa-solid fa-right-long ml-2 mt-1"></i></Link>
                        </div>
                     </div>

                  </div>

               </div>
            </div>
            <div className="btn-group items-center flex justify-center">
               <button className="btn bg-gray-100 hover:bg-gray-300  text-black">1</button>
               <button className="btn btn-active">2</button>
               <button className="btn bg-gray-100 hover:bg-gray-300 text-black">3</button>
               <button className="btn bg-gray-100 hover:bg-gray-300 text-black">4</button>
               <button className="btn bg-gray-100 hover:bg-gray-300 text-black">5</button>
            </div>
         </div>
         <Banner />
      </>
   )
}

export default Home