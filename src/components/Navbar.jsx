import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-slate-200 h-10 w-screen flex items-center justify-between font-poppins px-4 py-2'>
       <img src="" alt="" />

      <div className='min-w-md'>
        <ul className='flex justify-between font-medium'>
          <li>Link1</li>
          <li>Link2</li>
          <li>Link3</li>
          <li>Link4</li>
        </ul>
      </div>

      <div>
        <button className='rounded-md bg-amber-400 px-4 py-2'>Login</button>
      </div>
    </div>
  )
}

export default Navbar
