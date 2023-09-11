import React from 'react'
import CardSection3 from "./CardSection3"
const Section3 = () => {
  return (
    <div className='pt-10 bg-greydark-50 md:px-24 px-10'>
      <div className="container flex items-center justify-between flex-wrap flex-col lg:flex-row">

        <div className='lg:w-[33%] w-full'>
          <h2 className='text-4xl font-bold text-black mb-14'>Title Goes Here</h2>
          <p className='leading-5 text-sm text-black pb-20 '>Lorem ipsum dolor, sit e porro ipsa voluptatum itaque a. Assumenda, ipsum nobis? Quae accusamus nihil delectus  Assumenda, ipsum nobis? Quae accusamus nihil delectus animi sapiente ad eum, quidem nam quosnte adutum itaque a. Assumenda, ipsum nobis? Quae accusamus nihil delectus animi sapiente ad eum, quidem nam quosnte ad ..</p>
        </div>

        <div className="lg:w-[55%] w-full flex flex-wrap justify-between -mb-24">
          <CardSection3 number={1} />
          <CardSection3 number={2} />
          <CardSection3 number={3} />
          <CardSection3 number={4} />
        </div>

      </div>
    </div>
  )
}

export default Section3