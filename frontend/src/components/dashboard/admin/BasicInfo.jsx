

const BasicInfo = () => {

  let timeOfDay;
  const date = new Date();
  const hours = date.getHours();

  if (hours < 12) {
    timeOfDay = "Buenos Dias 😉";
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "Buenos Tardes 😉";
  } else {
    timeOfDay = "Buenos Noches 😉";
  }

  return (
    <>
      <div className="md:my-12 mx-10">
        <h1 className="text-4xl font-bold text-center text-gray-900">{timeOfDay}, Daniel Nuñez Rodas.</h1>
          <div className="grid grid-cols-1 gap-4 mt-10 md:grid-cols-2 lg:grid-cols-3">
            <div className="p-4 bg-white rounded-lg shadow-lg hover:scale-105 cursor-pointer">
              <div className="flex items-center justify-center">
                <div className="flex flex-col items-center">
                  <span className="text-4xl text-blue-700 font-bold">1,280</span>
                  <span className="text-xl font-bold mt-1.5 tracking-wider text-gray-900 uppercase">Blogs</span>
                </div>
              </div>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-lg hover:scale-105 cursor-pointer">
              <div className="flex items-center justify-center">
                <div className="flex flex-col items-center">
                  <span className="text-4xl text-blue-700 font-bold">1,280</span>
                  <span className="text-xl font-bold mt-1.5 tracking-wider text-gray-900 uppercase">Blogs</span>
                </div>
              </div>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-lg hover:scale-105 cursor-pointer">
              <div className="flex items-center justify-center">
                <div className="flex flex-col items-center">
                  <span className="text-4xl text-blue-700 font-bold">1,280</span>
                  <span className="text-xl font-bold mt-1.5 tracking-wider text-gray-900 uppercase">Blogs</span>
                </div>
              </div>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-lg hover:scale-105 cursor-pointer">
              <div className="flex items-center justify-center">
                <div className="flex flex-col items-center">
                  <span className="text-4xl text-blue-700 font-bold">1,280</span>
                  <span className="text-xl font-bold mt-1.5 tracking-wider text-gray-900 uppercase">Blogs</span>
                </div>
              </div>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-lg hover:scale-105 cursor-pointer">
              <div className="flex items-center justify-center">
                <div className="flex flex-col items-center">
                  <span className="text-4xl text-blue-700 font-bold">1,280</span>
                  <span className="text-xl font-bold mt-1.5 tracking-wider text-gray-900 uppercase">Blogs</span>
                </div>
              </div>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-lg hover:scale-105 cursor-pointer">
              <div className="flex items-center justify-center">
                <div className="flex flex-col items-center">
                  <span className="text-4xl text-blue-700 font-bold">1,280</span>
                  <span className="text-xl font-bold mt-1.5 tracking-wider text-gray-900 uppercase">Blogs</span>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>

  )
}

export default BasicInfo