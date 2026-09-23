import React from 'react'
import logo from '../assets/DENR.png'
const Navbar = () => {

  const [sidebarOpen, setSidebarOpen] = React.useState(false)

  return (
    <div className='bg-slate-200'>

      <div className='max-w-7xl h-15 px-6 w-screen flex items-center justify-between font-poppins m-auto'>
        <img className='w-10 h-10 rounded-full' src={logo} alt="" />

        <div className={`text-gray-700 sm:text-sm max-sm:w-60 max-sm:pl-10 max-sm:fixed top-0 bottom-0 right-0 max-sm:min-h-screen max-sm:h-full max-sm:flex-col max-sm:bg-primary max-sm:text-white max-sm:pt-20 flex sm:items-center gap-5 transition-all`}>


          <a onClick={() => setSidebarOpen(false)} href="#" className='sm:hover:border-b'>Home</a>
          <a onClick={() => setSidebarOpen(false)} href="#services" className='sm:hover:border-b'>Services</a>
          <a onClick={() => setSidebarOpen(false)} href="#our-work" className='sm:hover:border-b'>Our Work</a>
          <a onClick={() => setSidebarOpen(false)} href="#contact-us" className='sm:hover:border-b'>Contact Us</a>

        </div>

        <div>
          <button className='rounded-md bg-green-300 px-4 py-2 sm:text-sm'>Login</button>
        </div>

      </div>

    </div>
  )
}

export default Navbar
