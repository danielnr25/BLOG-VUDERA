import { NavLink, Outlet } from "react-router-dom"

const Dashboard = () => {
   return (
      <>
         <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content bg-opacity-50 scroll-vud">
               <div className="text-end mx-2">
                  <label htmlFor="my-drawer-2" className="btn text-black my-2 bg-gray-300 border-0 hover:text-white hover:bg-black drawer-button lg:hidden"><i className="fa-solid fa-bars text-2xl "></i></label>
               </div>
               <div className="my-2 mx-3">
                  <Outlet />
               </div>
            </div>
            <div className="drawer-side">
               <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
               <ul className="menu p-4 w-64 bg-black">
                  <li className="mt-2 bg-indigo-700 rounded-md text-white"><NavLink className="font-semibold text-base" to="/">
                     <i className="fa-solid fa-magnifying-glass text-xl"></i>
                     Buscar</NavLink>
                  </li>
                  <li className="mt-2 bg-indigo-700 rounded-md text-white"><NavLink className="font-semibold text-base" to="basic-info">
                     <i className="fa-solid fa-grip text-xl"></i>
                     Dashboard</NavLink>
                  </li>
                  <li className="mt-2 bg-indigo-700 rounded-md text-white"><NavLink className="font-semibold text-base" to="add-blog">
                     <i className="fa-solid fa-file-circle-plus text-xl"></i>
                     Publicación</NavLink>
                  </li>
                  <li className="mt-2 bg-indigo-700 rounded-md text-white"><NavLink className="font-semibold text-base" to="blogs">
                     <i className="fa-regular fa-file-lines text-xl"></i>
                     Blogs</NavLink>
                  </li>
                  <li className="mt-2 bg-indigo-700 rounded-md text-white"><NavLink className="font-semibold text-base" to="show-blog">
                     <i className="fa-solid fa-file-pen text-xl"></i>
                     Blog</NavLink>
                  </li>
                  <li className="mt-2 bg-indigo-700 rounded-md text-white"><NavLink className="font-semibold text-base" to="categories">
                     <i className="fa-solid fa-gear text-xl"></i>
                     Categorias</NavLink>
                  </li>
                  <li className="mt-2 bg-indigo-700 rounded-md text-white"><NavLink className="font-semibold text-base" to="users">
                     <i className="fa-solid fa-users text-xl"></i>
                     Autores</NavLink>
                  </li>
                  <li className="mt-2 bg-indigo-700 rounded-md text-white"><NavLink className="font-semibold text-base" to="messages">
                     <i className="fa-solid fa-envelope-open-text text-xl"></i>
                     Mensajes</NavLink>
                  </li>

               </ul>
            </div>
         </div>

      </>
   )
}

export default Dashboard