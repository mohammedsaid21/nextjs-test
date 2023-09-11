import React from 'react'

const Card = () => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/4 relative p-3">
      <div className="absolute top-5 right-14 w-0 h-0 ">
        <div className='triangle'></div>
      </div>

      <div className="bg-white p-3 shadow-md mb-4 py-16 ">
        <p className='leading-5 text-sm text-black'>
          Lorem ipsum dolor sit amet consectetur, quo dignissimos atque dolores debitis, praesentium totam magnam porro!
        </p>
      </div>
    </div>
  )
}

export default Card