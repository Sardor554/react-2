import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Categories from './components/Categories'
import Special from './components/Special'
import Testimonials from './components/Testimonials'
import Story from './components/Story'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='bg-[#FCFCFC]'>
      <Navbar /> 
      <Hero />
      <Categories />
      <Special />
      <Testimonials />
      <Story />
      <Footer />
    </div>
  )
}

export default App