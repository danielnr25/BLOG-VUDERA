
const Footer = () => {
   return (
      <>
         <footer className="footer items-center p-4 text-black ">
            <div className="items-center grid-flow-col md:justify-self-start justify-self-center">
               <a href="#" className="text-sky-700 text-4xl font-extrabold hover:text-primary"><i className="fa-brands fa-react"></i></a>
               <p className="font-semibold text-lg">Copyright © 2023 - Todos los derechos reservados</p>
            </div>
            <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end justify-self-center -mt-5">
               <a href="#" className="text-blue-700 text-xl  hover:text-primary"><i className="fa-brands fa-facebook-f"></i></a>
               <a href="#" className="text-blue-800 text-xl hover:text-primary"><i className="fa-brands fa-twitter"></i></a>
               <a href="#" className="text-violet-700 text-xl hover:text-primary"><i className="fa-brands fa-instagram"></i></a>
               <a href="#" className="text-blue-700 text-xl hover:text-primary"><i className="fa-brands fa-linkedin-in"></i></a>
               <a href="#" className="text-white-700 text-xl hover:text-primary"><i className="fa-brands fa-github"></i></a>
            </div>
         </footer>
      </>
   )
}

export default Footer