import React from 'react'

const Story = () => {
  return (
    <div className='pt-[250px] px-20'>
        <div className='flex justify-between items-center'>
            <div className='w-[650px] '>
            <h3 className='text-start ml-1 text-[#FF6868] text-lg tracking-wider font-semibold uppercase'>Our story & services</h3>
                <h1 className='font-bold text-5xl mt-10'>Our Culinary Journey <br /> And Services</h1>
                <p className='font-medium text-[#555555] text-lg mt-9'>Rooted in passion, we curate unforgettable dining <br /> experiences and offer exceptional services, <br /> blending culinary artistry with warm hospitality.</p>
                <button className='w-[170px] h-[50px] bg-[#39DB4A] rounded-[40px] flex justify-center items-center text-white font-semibold mt-10 text-xl'><a href="https://en.wikipedia.org/wiki/Java_(programming_language)">Explore</a></button>
            </div>
            <div className='w-[550px] flex flex-wrap gap-10'>
                <div className='w-[230px] py-10 rounded-3xl shadow-2xl px-4'>
                    <div className='flex justify-center '>
                        <img src="/image copy 18.png" alt="catering-image" className='w-12 h-12' />
                    </div>
                    <h1 className='text-[#5FE26C] font-bold text-xl mt-4 text-center uppercase'>Catering</h1>
                    <p className='font-medium text-lg text-center text-[#90BD95] mt-3'>Delight your guests with our flavors and  presentation</p>
                </div>
                
                <div className='w-[230px] py-10 rounded-3xl shadow-2xl px-4'>
                    <div className='flex justify-center '>
                        <img src="/image copy 19.png" alt="catering-image" className='w-12 h-12' />
                    </div>
                    <h1 className='text-[#5FE26C] font-bold text-xl mt-4 text-center uppercase'>Fast delivery</h1>
                    <p className='font-medium text-lg text-center text-[#90BD95] mt-3'>We deliver your order promptly to your door</p>
                </div>

                <div className='w-[230px] py-10 rounded-3xl shadow-2xl px-4'>
                    <div className='flex justify-center '>
                        <img src="/image copy 20.png" alt="catering-image" className='w-12 h-12' />
                    </div>
                    <h1 className='text-[#5FE26C] font-bold text-xl mt-4 text-center uppercase'>Online Ordering</h1>
                    <p className='font-medium text-lg text-center text-[#90BD95] mt-3'>Explore menu & order with ease using our Online Ordering</p>
                </div>

                <div className='w-[230px] py-10 rounded-3xl shadow-2xl px-4'>
                    <div className='flex justify-center '>
                        <img src="/image copy 21.png" alt="catering-image" className='w-12 h-12' />
                    </div>
                    <h1 className='text-[#5FE26C] font-bold text-xl mt-4 text-center uppercase'>Gift Cards</h1>
                    <p className='font-medium text-lg text-center text-[#90BD95] mt-3'>Give the gift of exceptional dining with Foodi Gift Cards</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Story