import React from 'react'
import { NavLink } from 'react-router'

function Header() {
  return (
    <div className='flex justify-between p-5 bg-gradient-to-r from-red-200 to-red-300 '>

      <img width= "80px" className='[50%] rounded-4xl' src="https://s.tmimgcdn.com/scr/1200x750/288000/logo-design-for-e-commerce-website-or-e-business-concept-for-smartphone-and-shop_288014-original.jpg" alt="" />
    <ul className='flex gap-20 text-2xl font-semibold text-cyan-950'>
      <li>
        <NavLink to = "" className={({isActive})=>isActive ? "text-red-900 p-2":""} >Home</NavLink>
      </li>
      <li>
        <NavLink to = "products" className={({isActive})=>isActive ? "text-red-900 p-2":""} >ProductsList</NavLink>
      </li>
      <li>
        <NavLink to = "contactus" className={({isActive})=>isActive ? "text-red-900 p-2":""}>contact us</NavLink>
      </li>

    </ul>
    </div>
  )
}

export default Header