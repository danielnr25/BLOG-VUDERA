
function Banner() {
   return (
      <div className="rounded-lg  py-10">
         <div className="hero-overlay rounded-lg"></div>
         <div className="hero-content text-center text-black">
            <div className="flex justify-center">
               <div className="grid grid-col-1 md:grid-cols-1 lg:grid-cols-2 gap-3 justify-between items-center">
                  <img src="https://images.pexels.com/photos/3586902/pexels-photo-3586902.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="rounded-lg cursor-pointer md:w-full hover:scale-105" alt="image-banner" />
                  <div className="shadow-md px-2 py-3 rounded-lg font-medium text-md cursor-pointer">
                     <p className="mb-5 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, doloremque. Saepe, rerum rem a et unde veritatis qui exercitationem quae, repudiandae aliquid natus quas illo maxime dolor delectus iure nihil?
                     </p>
                     <p className="mb-5 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, doloremque. Saepe, rerum rem a et unde veritatis qui exercitationem quae, repudiandae aliquid natus quas illo maxime dolor delectus iure nihil?
                     </p>
                     <p className="mb-5 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, doloremque. Saepe, rerum rem a et unde veritatis qui exercitationem quae, repudiandae aliquid natus quas illo maxime dolor delectus iure nihil?
                     </p>
                     <p className="mb-5 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, doloremque. Saepe, rerum rem a et unde veritatis qui exercitationem quae.
                     </p>
                     <button className="px-2 py-1 mb-2 rounded-lg font-semibold hover:bg-black hover:text-white bg-gray-300">Get Started</button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Banner