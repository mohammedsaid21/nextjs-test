import React from 'react'

const Section3 = () => {
  return (
    <div className='pt-10 bg-greydark-50 md:px-24 px-10'>
      <div className="container flex items-center justify-between flex-wrap flex-col lg:flex-row">

        <div className='lg:w-[33%] w-full'>
          <h2 className='text-4xl font-bold text-black mb-14'>Title Goes Here</h2>
          <p className='leading-5 text-sm text-black pb-20 '>Lorem ipsum dolor, sit e porro ipsa voluptatum itaque a. Assumenda, ipsum nobis? Quae accusamus nihil delectus  Assumenda, ipsum nobis? Quae accusamus nihil delectus animi sapiente ad eum, quidem nam quosnte adutum itaque a. Assumenda, ipsum nobis? Quae accusamus nihil delectus animi sapiente ad eum, quidem nam quosnte ad ..</p>
        </div>

        <div className="lg:w-[55%] w-full flex flex-wrap justify-between -mb-24">

          <div className="w-full sm:w-1/2 md:w-1/2 relative p-3 h-full mt-14">
            <div className="absolute top-5 right-14 w-0 h-0 text-6xl font-semibold text-gray-200">1</div>

            <div className="bg-white p-3 shadow-md mb-4 pb-16 pt-24">
              <p className='leading-5 text-sm text-black font-semibold'>
                Lorem ipsum dolor sit amet consectetur, quo dignissimos atque dolores debitis, praesentium totam magnam porro!
              </p>
            </div>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/2 relative p-3 h-full">
            <div className="absolute top-5 right-14 w-0 h-0 text-6xl font-semibold text-gray-200">2</div>

            <div className="bg-white p-3 shadow-md mb-4 pb-16 pt-24">
              <p className='leading-5 text-sm text-black font-semibold'>
                Lorem ipsum dolor sit amet consectetur, quo dignissimos atque dolores debitis, praesentium totam magnam porro!
              </p>
            </div>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/2 relative p-3 h-full md:mb-0 mb-16">
            <div className="absolute top-5 right-14 w-0 h-0 text-6xl font-semibold text-gray-200">3</div>

            <div className="bg-white p-3 shadow-md mb-4 pb-16 pt-24">
              <p className='leading-5 text-sm text-black font-semibold'>
                Lorem ipsum dolor sit amet consectetur, quo dignissimos atque dolores debitis, praesentium totam magnam porro!
              </p>
            </div>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/2 relative p-3 h-full -mt-16">
            <div className="absolute top-5 right-14 w-0 h-0 text-6xl font-semibold text-gray-200">4</div>

            <div className="bg-white p-3 shadow-md mb-4 pb-16 pt-24">
              <p className='leading-5 text-sm text-black font-semibold'>
                Lorem ipsum dolor sit amet consectetur, quo dignissimos atque dolores debitis, praesentium totam magnam porro!
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Section3