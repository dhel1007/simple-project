import React from 'react'
import logo from '../assets/DENR.png'
import { useNavigate } from 'react-router-dom'
const Navbar = () => {

  const [sidebarOpen, setSidebarOpen] = React.useState(false)
  const navigate = useNavigate()

  return (
    <div className='bg-slate-200'>

      <div className='max-w-7xl h-15 px-6 w-screen flex items-center justify-between font-poppins m-auto'>
        <img onClick={() => navigate("/")} className='w-10 h-10 rounded-full cursor-pointer' src={logo} alt="" />

        <div className={`text-gray-700 sm:text-sm max-sm:w-60 max-sm:pl-10 max-sm:fixed top-0 bottom-0 right-0 max-sm:min-h-screen max-sm:h-full max-sm:flex-col max-sm:bg-primary max-sm:text-white max-sm:pt-20 flex sm:items-center gap-5 transition-all`}>


          <a onClick={() => navigate("/")} className='sm:hover:border-b'>Home</a>
          <a onClick={() => navigate("/lot-status")}  className='sm:hover:border-b'>Check Lot Status</a>
          <a onClick={() => navigate(false)} className='sm:hover:border-b'>Our Work</a>
          <a onClick={() => navigate(false)} className='sm:hover:border-b'>Contact Us</a>

        </div>

        <div>
          <button className='rounded-md hover:bg-gray-800 cursor-pointer bg-gray-700 px-4 py-2 sm:text-sm text-white'>Login</button>
        </div>

      </div>

    </div>
  )
}

export default Navbar
