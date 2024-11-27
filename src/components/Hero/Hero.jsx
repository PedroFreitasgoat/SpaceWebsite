import React from 'react'

const Hero = () => {
  return (
    <div className='bg-black/20 h-full text-white relative z-50'>
      <div className="h-full flex justify-center items-center p-4">
        <div className="container grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className='space-y-4 lg:pr-36'>
                <h1 className='text-5xl font-bold uppercase'>Orbite ThE Earth</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing 
                    elit. Modi ipsa quos cumque enim a culpa, 
                    repellat non nesciunt libero quas. 
                    Maiores eum itaque, blanditiis quisquam 
                    similique facere facilis velit at.</p>
                    <button className='bg-blue-400 text-white hover:bg-blue-500 px-4 py-2 rounded-md duratin-200'>Learn More</button>
            </div>
            <div></div>
        </div>
      </div>
    </div>
  ) 
} 

export default Hero
