import React from 'react'

const Special = () => {
  return (
    <div className='pt-20 px-20'>
        <h3 className='text-start text-[#FF6868] text-lg tracking-wider font-semibold'>Special dishes</h3>
        <div className='flex justify-between items-center mt-6'>
            <h1 className='font-bold text-5xl'>Standout Dishes <br /> From Our menu</h1>
            <div className='flex gap-5'>
                <button className='w-12 h-12 rounded-full bg-[#EFEFEF] flex justify-center items-center'><img src="/image copy 7.png" alt="prev-btn" className='w-3 h-4' /></button>
                <button className='w-12 h-12 rounded-full bg-[#39DB4A] flex justify-center items-center'><img src="/image copy 8.png" alt="prev-btn" className='w-3 h-4' /></button>
            </div>
        </div>
        <div className='flex gap-7 mt-10'>
            <div className='w-[340px] shadow-2xl pb-10 rounded-3xl pt-0'>
                <div className='flex justify-end'>
                    <div className='w-14 h-12 rounded-tr-3xl rounded-bl-2xl bg-[#39DB4A] flex justify-center items-center'>
                        <img src="/image copy 9.png" alt="liked" className='w-[20px] h-[20px]' />
                    </div>
                </div>
                <div className='flex justify-center'>
                    <img src="/image copy 10.png" alt="fattorush-salad" className='w-[220px h-[220px] te' />
                </div>
                <div className='pl-8'>
                    <h1 className='text-start text-2xl font-semibold mt-3'>Fattoush salad</h1>
                    <p className='text-[#555555] text-start text-lg mt-3 font-medium'>Description of the item</p>
                    <div className='mt-4 flex justify-between items-center pr-8'>
                        <h2 className='text-[#FF6868] text-md font-normal'>$<span className='text-lg font-bold text-black'>24.00</span></h2>
                        <div className='flex gap-2 items-center text-lg'>
                            <img src="/image copy 11.png" className='w-4 h-4' alt="star" />
                            4.9
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-[340px] shadow-2xl pb-10 rounded-3xl pt-0'>
                <div className='flex justify-end'>
                    <div className='w-14 h-12 rounded-tr-3xl rounded-bl-2xl bg-[#39DB4A] flex justify-center items-center'>
                        <img src="/image copy 13.png" alt="!liked" className='w-[20px] h-[20px]' />
                    </div>
                </div>
                <div className='flex justify-center'>
                    <img src="/image copy 12.png" alt="vegetable-salad" className='w-[220px h-[220px] te' />
                </div>
                <div className='pl-8'>
                    <h1 className='text-start text-2xl font-semibold mt-3'>Vegetable salad</h1>
                    <p className='text-[#555555] text-start text-lg mt-3 font-medium'>Description of the item</p>
                    <div className='mt-4 flex justify-between items-center pr-8'>
                        <h2 className='text-[#FF6868] text-md font-normal'>$<span className='text-lg font-bold text-black'>26.00</span></h2>
                        <div className='flex gap-2 items-center text-lg'>
                            <img src="/image copy 11.png" className='w-4 h-4' alt="star" />
                            4.6
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-[340px] shadow-2xl pb-10 rounded-3xl pt-0'>
                <div className='flex justify-end'>
                    <div className='w-14 h-12 rounded-tr-3xl rounded-bl-2xl bg-[#39DB4A] flex justify-center items-center'>
                        <img src="/image copy 13.png" alt="!liked" className='w-[20px] h-[20px]' />
                    </div>
                </div>
                <div className='flex justify-center'>
                    <img src="/image copy 14.png" alt="fattorush-salad" className='w-[220px h-[220px] te' />
                </div>
                <div className='pl-8'>
                    <h1 className='text-start text-2xl font-semibold mt-3'>Egg vegi salad</h1>
                    <p className='text-[#555555] text-start text-lg mt-3 font-medium'>Description of the item</p>
                    <div className='mt-4 flex justify-between items-center pr-8'>
                        <h2 className='text-[#FF6868] text-md font-normal'>$<span className='text-lg font-bold text-black'>23.00</span></h2>
                        <div className='flex gap-2 items-center text-lg'>
                            <img src="/image copy 11.png" className='w-4 h-4' alt="star" />
                            4.5
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Special