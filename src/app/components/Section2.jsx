import React from 'react'
import Card from "./Card"
const Section2 = () => {
  return (
    <div className='pt-10 bg-greydark-50 md:px-24 px-10 mb-56 '>
      <div className="container">

        <h2 className='text-4xl text-center font-bold text-black mb-10'>Title Goes Here</h2>
        <p className='leading-5 text-md text-black pb-20 '>Lorem ipsum dolor, sit e porro ipsa voluptatum itaque a. Assumenda, ipsum nobis? Quae accusamus nihil delectus  Assumenda, ipsum nobis? Quae accusamus nihil delectus animi sapiente ad eum, quidem nam quosnte adutum itaque a. Assumenda, ipsum nobis? Quae accusamus nihil delectus animi sapiente ad eum, quidem nam quosnte ad ..</p>

        <div className="flex flex-wrap justify-between -mb-32">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>

      </div>
    </div>
  )
}

export default Section2