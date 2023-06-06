function CommentForm() {
  return (
    <div className="space-y-2">
      <h2 className="text-2xl text-blue-950 font-bold mb-4">Comenta</h2>
      <p className="text-gray-800">Su dirección de correo electrónico no será publicada. </p>
      <form>
         <div className="flex flex-col mb-4">
            <label className="mb-2 font-bold text-lg text-gray-900" htmlFor="name">Nombre</label>
            <input className="border py-2 px-3 text-grey-800 rounded-md" type="text" name="name" id="name" placeholder="Your name" />
         </div>
         <div className="flex flex-col mb-4">
            <label className="mb-2 font-bold text-lg text-gray-900" htmlFor="email">Email</label>
            <input className="border py-2 px-3 text-grey-800 rounded-md" type="text" name="email" id="email" placeholder="Your email address" />
         </div>
         <div className="flex flex-col mb-4">
            <label className="mb-2 font-bold text-lg text-gray-900" htmlFor="message">Mensaje</label>
            <textarea className="border py-5 px-3 text-grey-800 rounded-md" name="message" id="message" placeholder="Your message"></textarea>
         </div>
         <button className="block bg-indigo-700 hover:bg-indigo-600 text-white uppercase text-md mx-auto p-1.5 rounded" type="submit">Enviar Mensaje</button>

      </form>

    </div>
  )
}

export default CommentForm