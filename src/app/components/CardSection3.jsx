import React from 'react'

const CardSection3 = ({ number }) => {
  return (
    <div className={`w-full sm:w-1/2 md:w-1/2 relative p-3 h-full ${number == 1 ? "mt-14" : number == 3 ? "md:mb-0 mb-16" : number == 4 ? "-mt-16" : ""}`}>
      <div className="absolute top-5 right-14 w-0 h-0 text-6xl font-semibold text-gray-200">{number}</div>

      <div className="bg-white p-3 shadow-md mb-4 pb-16 pt-24">
        <p className='leading-5 text-sm text-black font-semibold'>
          Lorem ipsum dolor sit amet consectetur, quo dignissimos atque dolores debitis, praesentium totam magnam porro!
        </p>
      </div>
    </div>
  )
}

export default CardSection3