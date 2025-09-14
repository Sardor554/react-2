import React from 'react'

const Navbar = () => {
  return (
    <header>
        <div className='pt-10 px-20 flex justify-between items-center'>
            <img src="/logo.svg" alt="logo" className='w-[108px] h-[41px]' />
            <nav className='flex gap-14'>
                <a href="#" className='font-medium text-lg text-[#272727] hover:text-[#39DB4A] transition-all'>Home</a>
                <a href="#" className='font-medium text-lg text-[#272727] hover:text-[#39DB4A] transition-all'>Menu</a>
                <a href="#" className='font-medium text-lg text-[#272727] hover:text-[#39DB4A] transition-all'>Services</a>
                <a href="#" className='font-medium text-lg text-[#272727] hover:text-[#39DB4A] transition-all'>Offers</a>
            </nav>
            <div className='flex gap-10 items-center'>
                <img src="/image.png" alt="search" className='w-6 h-6' />
                    <button className='w-[160px] h-[60px] bg-[#39DB4A] rounded-[40px] flex gap-2 items-center justify-center text-white font-medium text-lg'>
                    <img src="/image copy.png" alt="contact" className='w-5 h-5' />
                    Contact
                    </button>
            </div>
        </div>
    </header>
  )
}

export default Navbar