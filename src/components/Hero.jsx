import React from 'react'

const Hero = () => {
  return (
    <section className='pt-10 '>
      <div className='flex justify-between items-center px-20'>
        <div className='w-[550px] flex flex-col gap-10'>
          <h1 className='font-bold text-5xl leading-tight'>Dive into Delights of Delectable <span className='text-[#39DB4A]'>Food</span></h1>
          <p className='font-normal text-xl text-[#4A4A4A]'>Where Each Plate Weaves a Story of Culinary Mastery and Passionate Craftsmanship</p>
          <div className='flex gap-6 items-center'>
            <button className='w-[180px] h-[60px] bg-[#39DB4A] hover:shadow-md transition-all hover:shadow-[#39DB4A]  rounded-[40px] flex justify-center items-center text-white font-medium text-xl'>Order now</button>
            <span >Watch video</span>
            <div className='cursor-pointer w-16 h-16 rounded-full shadow-xl flex items-center justify-center'>
              <img src="/image copy 2.png" alt="watch video" className='w-[25px] h-[30px]' />
            </div>
          </div>
        </div>
        <div className='w-[500px] h-[500px] rounded-full bg-[#39DB4A] flex justify-center items-center'>
          <img src="image copy 3.png" alt="hero-image" className='w-[350px] h-[350px]' />
        </div>
      </div>
    </section>
  )
}

export default Hero