import React, { useContext, useState } from 'react'
import {assets} from '../assets/assets'
import { NavLink } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {

  const [visible, setVisible] = useState(false);

  const {setShowSearch} = useContext(ShopContext);
  return (
    <div className='flex items-center justify-between py-5 font-medium'>
    

      <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
          <NavLink  to='/' className='flex flex-col items-center gap-1'>
            <p>HOME</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
           </NavLink>

           <NavLink  to='/collection' className='flex flex-col items-center gap-1'>
            <p>COLLECTION</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
           </NavLink>

           <NavLink  to='/about' className='flex flex-col items-center gap-1'>
            <p>ABOUT</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
           </NavLink>

           <NavLink  to='/contact' className='flex flex-col items-center gap-1'>
            <p>CONTACT</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
           </NavLink>
     </ul>

    <div className='flex items-center gap-6'> 

    </div>



    </div>
  )
}

export default Navbar