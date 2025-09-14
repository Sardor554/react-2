import React from 'react'

const Categories = () => {
  return (
    <div className='pt-16 px-20'>
        <h3 className='text-center text-[#FF6868] text-lg tracking-wider font-semibold'>Customer favorites</h3>
        <h1 className='text-center text-5xl font-semibold mt-3'>Popular categories</h1>
        <div className='flex justify-between items-center mt-6'>
            <div className='w-[240px] hover:scale-110 transition-[0.6s] h-[240px] rounded-3xl shadow-xl flex items-center flex-col gap-5 justify-center'>
                <div className='w-[70px] h-[70px] rounded-full bg-[#C1F1C6] flex justify-center items-center'>
                    <img src="/image copy 4.png" alt="main-dish" className='w-[45px] h-[45px]' />
                </div>
                <h3 className='font-medium text-lg '>Main Dish</h3>
                <span className='text-[#555555] font-normal text-md'>(86 dishes)</span>
            </div>
            <div className='w-[240px] hover:scale-110 h-[240px] transition-[0.6s] rounded-3xl shadow-xl flex items-center flex-col gap-5 justify-center'>
                <div className='w-[70px] h-[70px] rounded-full bg-[#C1F1C6] flex justify-center items-center'>
                    <img src="/image copy 5.png" alt="break-fast" className='w-[45px] h-[45px]' />
                </div>
                <h3 className='font-medium text-lg '>Break fast</h3>
                <span className='text-[#555555] font-normal text-md'>(12 break fast)</span>
            </div>
            <div className='w-[240px] hover:scale-110 h-[240px] transition-[0.6s] rounded-3xl shadow-xl flex items-center flex-col gap-5 justify-center'>
                <div className='w-[70px] h-[70px] rounded-full bg-[#C1F1C6] flex justify-center items-center'>
                    <img src="/image copy 6.png" alt="dessert" className='w-[45px] h-[45px]' />
                </div>
                <h3 className='font-medium text-lg '>Dessert</h3>
                <span className='text-[#555555] font-normal text-md'>(48 dessert)</span>
            </div>
            <div className='w-[240px] hover:scale-110 h-[240px] transition-[0.6s] rounded-3xl shadow-xl flex items-center flex-col gap-5 justify-center'>
                <div className='w-[70px] h-[70px] rounded-full bg-[#C1F1C6] flex justify-center items-center'>
                    <img src="/image copy 6.png" alt="all" className='w-[45px] h-[45px]' />
                </div>
                <h3 className='font-medium text-lg '>Browse all</h3>
                <span className='text-[#555555] font-normal text-md'>(255 items)</span>
            </div>
            
        </div>
    </div>
  )
}

export default Categories