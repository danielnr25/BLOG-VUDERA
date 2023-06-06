
function Contact() {
   return (
      <section className="text-gray-600 body-font relative">
         <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
            <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
               <iframe width="100%" height="100%" className="absolute inset-0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.8998050176087!2d-79.84550742514034!3d-6.78204709321501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x904cef3acfd7ae9b%3A0x70328463f5fe1e20!2sAv.%20Sta.%20Victoria%2C%20Chiclayo!5e0!3m2!1ses-419!2spe!4v1684903826107!5m2!1ses-419!2spe" allowfullscreen="" loading="lazy"></iframe>

               <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                  <div className="lg:w-1/2 px-4">
                     <h2 className="title-font font-semibold text-gray-900 tracking-wider text-base">Ubicación</h2>
                     <p className="mt-1 text-gray-700">Chiclayo - Lam, Perú</p>
                  </div>
                  <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                     <h2 className="title-font font-semibold text-gray-900 tracking-wider text-base">Correo</h2>
                     <a className="text-blue-900 leading-relaxed">vudera@email.com</a>
                     <h2 className="title-font font-semibold text-gray-900 tracking-wider text-base mt-4">Teléfono</h2>
                     <p className="leading-relaxed text-gray-700">969508394</p>
                  </div>
               </div>
            </div>
            <div className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
               <h2 className="text-gray-900 text-xl text-center mb-2 font-bold">Contáctame</h2>
               <p className="leading-relaxed mb-5 text-gray-700 font-medium">Envía un correo para cualquier servicio, o alguna inquietud. </p>
               <div className="relative mb-4">
                  <label  className="leading-7 text-base font-medium text-gray-900">Name</label>
                  <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-gray-900 focus:ring-1 focus:ring-gray-800  text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
               </div>
               <div className="relative mb-4">
                  <label className="leading-7 text-base font-medium text-gray-900">Email</label>
                  <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-gray-900 focus:ring-1 focus:ring-gray-800  text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
               </div>
               <div className="relative mb-4">
                  <label className="leading-7 text-base font-medium text-gray-900">Message</label>
                  <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-gray-900 focus:ring-1 focus:ring-gray-800  h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
               </div>
               <button className="text-black bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-black rounded-lg text-lg font-semibold hover:text-white">Enviar</button>
               
            </div>
         </div>
      </section >
   )
}

export default Contact