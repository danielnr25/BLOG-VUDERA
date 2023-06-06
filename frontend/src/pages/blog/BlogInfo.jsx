import { Link } from "react-router-dom"
import CommentForm from "./CommentForm"
import LoadComment from "./LoadComment"


const BlogInfo = () => {
   return (
      <>
         <div className="sm:px-8 mt-10 lg:mt-16">
            <div className="mx-auto max-w-7xl lg:px-4">
               <div className="relative px-4 sm:px-8 lg:px-8">
                  <div className="max-w-full mx-auto">
                     <div className="xl:relative">
                        <div className="max-w-4xl mx-auto">
                           <header className="flex flex-col">
                              <h1 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                                 <span className="block xl:inline">Aprende a crear componentes reutilizables con Tailwind y Next.js</span>
                              </h1>
                              <time className="flex items-center order-first text-base text-gray-700">
                                 <span className="h-4 w-0.5 rounded-full bg-zinc-900"></span>
                                 <span className="ml-3">18 de mayo de 2023</span>
                              </time>

                           </header>

                           <div className="inline-block space-x-4 mt-4">
                              <Link className="inline-block text-blue-700 before:content-['#']">
                                 Javascript
                              </Link>
                              <Link className="inline-block text-blue-700 before:content-['#']">
                                 Javascript
                              </Link>

                              <Link className="inline-block text-blue-700 before:content-['#']">
                                 Javascript
                              </Link>
                           </div>

                           <div className="mt-8 prose text-gray-900 dark:prose-invert">
                              <img src="https://images.pexels.com/photos/5235781/pexels-photo-5235781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="image-details" className="rounded-lg w-full md:h-[350px] lg:h-[400px] object-cover cursor-grabbing" />
                              <p className="text-justify">
                                 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi vero ab voluptatibus, atque deserunt vitae illum animi et exercitationem eum quos quae minima expedita, impedit, enim dolorem debitis quisquam consequatur!
                                 Earum quam reprehenderit, nihil vero exercitationem nulla culpa rerum quis itaque cupiditate sapiente voluptas quo ullam atque ipsam officiis, officia impedit voluptatum architecto aliquid quia voluptatem veritatis nesciunt quisquam. Quos.
                              </p>
                              <p className="text-justify">
                                 Eum aliquid consequatur sint? Natus accusamus quaerat repellat error voluptatem? Alias omnis vero cumque porro molestiae libero earum. Ab ut aspernatur doloremque earum iusto fuga laboriosam incidunt mollitia, dolorum alias.
                                 Quo eaque impedit voluptas perspiciatis, doloremque dolorem maiores delectus sed molestiae temporibus sapiente consequatur ducimus, aliquid quam neque, laborum culpa animi. Culpa asperiores nam veniam eaque nobis libero, iure numquam.
                              </p>
                           </div>
                           <CommentForm />
                           <LoadComment />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}

export default BlogInfo