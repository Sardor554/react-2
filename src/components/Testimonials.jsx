import React from 'react'

const Testimonials = () => {
    return (
        <div className='pt-72 px-20'>
            <div className='flex justify-between items-center'>
                <div className='relative'>
                    <div className='w-[360px] h-[280px] bg-[#53EC62] rounded-t-[100px] rounded-b-3xl'></div>
                    <img src="/girl.png" className='w-[400px] h-[500px] absolute bottom-0 -left-5' alt="" />
                </div>
                <div className='w-[600px] mb-32'>
                    <h3 className='text-start text-[#FF6868] text-lg tracking-wider font-semibold'>Testimonials</h3>
                    <h1 className='font-bold text-5xl mt-6'>What Our Customers <br /> Say About Us</h1>
                    <p className='font-medium text-xl text-[#555555] mt-7'>“I had the pleasure of dining at Foodi last night, and I'm still raving about the experience! The attention to detail in presentation and service was impeccable”</p>
                    <div className='gap-8 relative flex'>
                        <div className='flex  mt-7'>
                            <img src="/image copy 15.png" alt="image-testimoials" className='w-14 h-14 absolute z-10' />
                            <img src="/image copy 16.png" alt="image-testimoials" className='w-14 h-14 absolute left-10 z-20' />
                            <img src="/image copy 17.png" alt="image-testimoials" className='w-14 h-14 absolute left-[4.5rem] z-30' />
                        </div>
                        <div className='absolute left-40 flex flex-col gap-3 mt-7'>
                            <h4 className='font-semibold text-xl'>Customer Feedback</h4>
                            <div className='flex gap-4 items-center'>
                                <img src="/image copy 11.png" alt="stars" className='w-5 h-5' />
                                <p className='font-medium text-lg text-[#454545]'>4.9</p>
                                <span className='text-lg font-medium text-[#807E7E] mb-1'>(18.6k Reviews)</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials