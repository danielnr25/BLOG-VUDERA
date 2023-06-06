import { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const AddBlog = () => {

  const [values, setValues] = useState('')



  return (
    <>
      <h1 className="font-bold text-blue-900 md:mx-12 text-3xl tracking-wide md:mt-5 ml-3 mb-3">Registrar Blog</h1>
      <div className="md:my-6 md:mx-12 mx-3 sm:mt-16 border-1 shadow-sm shadow-slate-900 rounded-md p-4" >
        <form>
          <div className="grid grid-cols-2 gap-3">
            <div className=''>
              <label htmlFor="name" className="text-md font-medium text-blue-800">Titulo </label>
              <input type="text" placeholder="Ingrese titulo del blog" className="w-full border-2 rounded-lg border-gray-800 p-1 px-2 focus:border-blue-500 placeholder:font-base font-medium placeholder:text-gray-600 " />
            </div>
            <div>
              <label htmlFor="name" className="text-md font-medium text-blue-800">Palabras Clave </label>
              <input type="text" placeholder="Ingrese las palabras claves" className="w-full border-2 rounded-lg border-gray-800 p-1 px-2 focus:border-blue-500 placeholder:font-base font-medium placeholder:text-gray-600" />
            </div>
            <div>
              <label htmlFor="name" className="text-md font-medium text-blue-800">Categoría </label>
              <select className="w-full border-2 rounded-lg border-gray-800 p-1 px-2 focus:border-blue-500 font-base text-gray-600">
                <option value="0">Seleccione</option>
                <option value="1">Javascript</option>
                <option value="2">Php</option>
                <option value="2">Python</option>
                <option value="3">Java</option>
              </select>
            </div>
            <div>
              <label htmlFor="description" className="text-md font-medium text-blue-800">Estado </label>
              <select className="w-full border-2 rounded-lg border-gray-800 p-1 px-2 focus:border-blue-500 font-base text-gray-600">
                <option value="0">Seleccione</option>
                <option value="1">Activo</option>
                <option value="2">Inactivo</option>
              </select>
            </div>

            <div>
              <label htmlFor="name" className="text-md font-medium text-blue-800">Email </label>
              <input type="email" placeholder="Ingrese correo eléctronico" className="w-full border-2 rounded-lg border-gray-800 p-1 px-2 focus:border-blue-500 placeholder:font-base font-medium placeholder:text-gray-500 " />
            </div>
            <div>
              <label htmlFor="name" className="text-md font-medium text-blue-800">Autor </label>
              <input type="text" placeholder="Ingrese datos de autor" className="w-full border-2 rounded-lg border-gray-800 p-1 px-2 focus:border-blue-500 placeholder:font-base font-medium placeholder:text-gray-500 " />
            </div>
          </div>
          <div className='flex flex-col space-y-2 mt-3 mb-4'>
            <label htmlFor="description" className="text-md font-medium  text-blue-800">Imagen </label>
            <input type="file" className="w-full border-2 rounded-lg bg-white border-gray-800 p-1 px-2 focus:border-gray-800 font-base text-gray-800" />
          </div>

          <div className='flex flex-col space-y-2 mt-3 mb-4'>
            <label htmlFor="description" className="text-md font-medium text-blue-800">Descripción </label>
            <ReactQuill theme='snow' className='bg-gray-50 border-2 border-gray-900 text-black' value={values} onChange={setValues} />
          </div>
          <div className="flex justify-end">
            <button type="submit" className="bg-blue-700 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg">
              Registrar
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default AddBlog