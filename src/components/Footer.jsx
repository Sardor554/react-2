import React from 'react'

const Footer = () => {
    return (
        <div className='pt-[240px] px-20'>
            <div className='flex justify-between'>
                <div className='w-[250px]'>
                    <img src="/logo.svg" alt="logo" className='w-[108px] h-[47]' />
                    <p className='font-medium text-[#555555] text-lg mt-10'>Savor the artistry where <br /> every dish is a culinary <br /> masterpiece</p>
                </div>
                <div className='flex flex-col gap-5'>
                    <h2 className='font-semibold text-xl'>Useful links</h2>
                    <div className='flex flex-col gap-3'>
                        <span className='font-medium text-[#555555] text-lg '>About us</span>
                        <span className='font-medium text-[#555555] text-lg '>Events</span>
                        <span className='font-medium text-[#555555] text-lg '>Blog</span>
                        <span className='font-medium text-[#555555] text-lg '>FAQ</span>
                    </div>
                </div>
                <div className='flex flex-col gap-5'>
                    <h2 className='font-semibold text-xl'>Main menu</h2>
                    <div className='flex flex-col gap-3'>
                        <span className='font-medium text-[#555555] text-lg '>Home</span>
                        <span className='font-medium text-[#555555] text-lg '>Offers</span>
                        <span className='font-medium text-[#555555] text-lg '>Menus</span>
                        <span className='font-medium text-[#555555] text-lg '>Reservation</span>
                    </div>
                </div>
                <div className='flex flex-col gap-5 mb-6'>
                    <h2 className='font-semibold text-xl'>Conact Us</h2>
                    <div className='flex flex-col gap-3'>
                        <span className='font-medium text-[#555555] text-lg '>foodi@email.com</span>
                        <span className='font-medium text-[#555555] text-lg '>+64 958 248 966</span>
                        <span className='font-medium text-[#555555] text-lg '>Social media</span>
                    </div>
                </div>
                <div>

                </div>
            </div>
            <div className='flex justify-between items-center mt-20'>
                <div className='flex gap-5'>
                    <div className='w-12 h-12 rounded-full flex justify-center items-center bg-[#39DB4A]'>
                        <img src="/image copy 22.png" alt="facebook" className='w-3 h-4' />
                    </div>

                    <div className='w-12 h-12 rounded-full flex justify-center items-center bg-[#EDFFEF]'>
                        <img src="/image copy 23.png" alt="facebook" className='w-5 h-5' />
                    </div>

                    <div className='w-12 h-12 rounded-full flex justify-center items-center bg-[#EDFFEF]'>
                        <img src="/image copy 24.png" alt="facebook" className='w-5 h-5' />
                    </div>

                    <div className='w-12 h-12 rounded-full flex justify-center items-center bg-[#EDFFEF]'>
                        <img src="/image copy 25.png" alt="facebook" className='w-5 h-5' />
                    </div>                
                </div>
                <p>Copyright © 2023 Dscode | All rights reserved</p>
                <div></div>
            </div>
        </div>
    )
}

export default Footer