
const Users = () => {
  return (
    <>
      <section className="md:flex md:items-center md:justify-between">
        <div className="md:my-12 mx-10 text-center">
          <span className="text-black tracking-wider text-3xl font-bold bg-slate-200 rounded-lg px-4 py-2 cursor-pointer">
            Total Autores: <b className="tracking-wider text-blue-600">100</b>
          </span>
        </div>
        <div className="text-center mt-10 md:-mt-0">
          <input type="text" placeholder="Escriba aquí ..." className="input h-[3.16rem] w-full max-w-xs input-primary placeholder:font-medium placeholder:text-md" />
        </div>
      </section>
      <div className="overflow-x-auto my-5">
        <table className="table w-full text-center items-center">
          <thead className="">
            <tr className="items-center text-center">
              <th>#</th>
              <th>Email</th>
              <th>Nombre</th>
              <th>Apellidos</th>
              <th>Rol</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>Lorem ipsum dolor sit amet elit....</td>
              <td>Daniel</td>
              <td>Nuñez Rodas</td>
              <td>
                <div className="badge bg-sky-500 border-1 border-sky-500  px-3 py-2.5">
                  <p className="text-white text-sm font-semibold">Autor</p>
                </div>
              </td>
              <td>
                <div className="flex items-center justify-center gap-3">
                  <a href="/" className="bg-green-600 text-center rounded-lg py-0.5 px-2 hover:bg-green-400 ">
                    <i className="fa fa-edit text-lg text-gray-100 hover:text-black"></i>
                  </a>
                 
                </div>
              </td>

            </tr>
            <tr>
              <th>2</th>
              <td>Lorem ipsum dolor sit amet elit....</td>
              <td>Javascrpt</td>
              <td>Nuñez Rodas</td>
              <td>
                <div className="badge bg-yellow-600 border-1 border-yellow-600 px-3 py-2.5">
                  <p className="text-white text-sm font-semibold">Admin</p>
                </div>
              </td>
              <td>
                <div className="flex items-center justify-center gap-3">
                  <a href="/" className="bg-green-600 text-center rounded-lg py-0.5 px-2 hover:bg-green-400 ">
                    <i className="fa fa-edit text-lg text-gray-100 hover:text-black"></i>
                  </a>
                 
                </div>
              </td>

            </tr>
            <tr>
              <th>3</th>
              <td>Lorem ipsum dolor sit amet elit....</td>
              <td>Javascrpt</td>
              <td>Nuñez Rodas</td>
              <td>
                <div className="badge bg-sky-500 border-1 border-sky-500 px-3 py-2.5">
                  <p className="text-white text-sm font-semibold">Autor</p>
                </div>
              </td>
              <td>
                <div className="flex items-center justify-center gap-3">
                  <a href="/" className="bg-green-600 text-center rounded-lg py-0.5 px-2 hover:bg-green-400 ">
                    <i className="fa fa-edit text-lg text-gray-100 hover:text-black"></i>
                  </a>
                 
                </div>
              </td>

            </tr>
            <tr>
              <th>4</th>
              <td>Lorem ipsum dolor sit amet elit....</td>
              <td>Javascrpt</td>
              <td>Daniel Rodas</td>
              <td>
                <div className="badge bg-yellow-600 border-1 border-yellow-600 px-3 py-2.5">
                  <p className="text-white text-sm font-semibold">Admin</p>
                </div>
              </td>
              <td>
                <div className="flex items-center justify-center gap-3">
                  <a href="/" className="bg-green-600 text-center rounded-lg py-0.5 px-2 hover:bg-green-400 ">
                    <i className="fa fa-edit text-lg text-gray-100 hover:text-black"></i>
                  </a>
                 
                </div>
              </td>

            </tr>
            <tr>
              <th>5</th>
              <td>Lorem ipsum dolor sit amet elit....</td>
              <td>Javascrpt</td>
              <td>Daniel Rodas</td>
              <td>
                <div className="badge bg-yellow-600 border-1 border-yellow-600 px-3 py-2.5">
                  <p className="text-white text-sm font-semibold">Admin</p>
                </div>
              </td>
              <td>
                <div className="flex items-center justify-center gap-3">
                  <a href="/" className="bg-green-600 text-center rounded-lg py-0.5 px-2 hover:bg-green-400 ">
                    <i className="fa fa-edit text-lg text-gray-100 hover:text-black"></i>
                  </a>
                 
                </div>
              </td>

            </tr>
          </tbody>
        </table>
        <div className="btn-group items-center flex justify-end mt-3">
          <button className="btn bg-gray-100 hover:bg-gray-300  text-black">Anterior</button>
          <button className="btn btn-active">3</button>
          <button className="btn bg-gray-100 hover:bg-gray-300 text-black">4</button>
          <button className="btn bg-gray-100 hover:bg-gray-300 text-black">5</button>
          <button className="btn bg-gray-100 hover:bg-gray-300 text-black">Siguiente</button>
        </div>
      </div>
    </>
  )
}

export default Users