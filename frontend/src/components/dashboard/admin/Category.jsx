
const Category = () => {
  return (
    <>
      <section className="md:flex md:items-center md:justify-between">
        <div className="md:my-12 mx-10 text-center">
          <h1 className="text-3xl tracking-wide text-black font-bold">Categoria</h1>
        </div>
        <div className="text-center mt-10 md:-mt-0">
          <label htmlFor="my-modal-3" className="bg-blue-600 py-1.5 px-3 md:py-2 md:px-3 font-bold text-white rounded-lg hover:bg-black cursor-pointer hover:text-gray-50">Registrar</label>

          <input type="checkbox" id="my-modal-3" className="modal-toggle"  />
          <div className="modal ">
            <div className="modal-box relative">
              <div className="flex justify-between items-center border-b-2 border-gray-700">
                <h3 className="text-lg font-bold text-start mb-2">Registrar Categoria</h3>
                <label htmlFor="my-modal-3" className="rounded mb-2 cursor-pointer w-5 py-0 px-1 bg-black text-white hover:bg-slate-800 text-sm">X</label>
              </div>
              <div className="mt-5 flex flex-col items-start">
                <label htmlFor="name" className="text-md font-medium text-blue-800 mb-2">Categoría </label>
                <input type="text" placeholder="Ingrese nombre" className="w-full border-2 rounded-lg border-gray-800 p-1 px-2 focus:border-blue-500 placeholder:font-medium font-medium placeholder:text-gray-800 " />
              </div>
              <button className="items-center float-right mt-5 bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-lg">
                <i className="fa fa-plus mr-2"></i>
                Registrar
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="overflow-x-auto my-5 ml-5">
        <table className="table w-full text-center items-center">
          <thead className="">
            <tr className="items-center text-center">
              <th>#</th>
              <th>Nombre</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>Javascrpt</td>
              <td>
                <div className="flex items-center justify-center gap-3">
                  <a href="/" className="bg-green-600 text-center rounded-lg py-0.5 px-2 hover:bg-green-400 ">
                    <i className="fa fa-edit text-lg text-gray-100 hover:text-black"></i>
                  </a>
                  <a href="" className="bg-red-600 rounded-lg py-0.5 px-2 hover:bg-red-400">
                    <i className="fa fa-trash text-lg text-gray-100 hover:text-black"></i>
                  </a>
                </div>
              </td>

            </tr>
            <tr>
              <th>2</th>
              <td>Javascrpt</td>
              <td>
                <div className="flex items-center justify-center gap-3">
                  <a href="/" className="bg-green-600 text-center rounded-lg py-0.5 px-2 hover:bg-green-400 ">
                    <i className="fa fa-edit text-lg text-gray-100 hover:text-black"></i>
                  </a>
                  <a href="" className="bg-red-600 rounded-lg py-0.5 px-2 hover:bg-red-400">
                    <i className="fa fa-trash text-lg text-gray-100 hover:text-black"></i>
                  </a>
                </div>
              </td>

            </tr>
            <tr>
              <th>3</th>
              <td>Javascrpt</td>
              <td>
                <div className="flex items-center justify-center gap-3">
                  <a href="/" className="bg-green-600 text-center rounded-lg py-0.5 px-2 hover:bg-green-400 ">
                    <i className="fa fa-edit text-lg text-gray-100 hover:text-black"></i>
                  </a>
                  <a href="" className="bg-red-600 rounded-lg py-0.5 px-2 hover:bg-red-400">
                    <i className="fa fa-trash text-lg text-gray-100 hover:text-black"></i>
                  </a>
                </div>
              </td>

            </tr>
            <tr>
              <th>4</th>
              <td>Javascrpt</td>
              <td>
                <div className="flex items-center justify-center gap-3">
                  <a href="/" className="bg-green-600 text-center rounded-lg py-0.5 px-2 hover:bg-green-400 ">
                    <i className="fa fa-edit text-lg text-gray-100 hover:text-black"></i>
                  </a>
                  <a href="" className="bg-red-600 rounded-lg py-0.5 px-2 hover:bg-red-400">
                    <i className="fa fa-trash text-lg text-gray-100 hover:text-black"></i>
                  </a>
                </div>
              </td>

            </tr>
            <tr>
              <th>5</th>
              <td>Javascrpt</td>
              <td>
                <div className="flex items-center justify-center gap-3">
                  <a href="/" className="bg-green-600 text-center rounded-lg py-0.5 px-2 hover:bg-green-400 ">
                    <i className="fa fa-edit text-lg text-gray-100 hover:text-black"></i>
                  </a>
                  <a href="" className="bg-red-600 rounded-lg py-0.5 px-2 hover:bg-red-400">
                    <i className="fa fa-trash text-lg text-gray-100 hover:text-black"></i>
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

export default Category