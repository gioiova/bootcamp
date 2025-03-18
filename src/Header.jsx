import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div className='bg-red-500 p-4'>
        <nav>
            <ul className='flex justify-around text-white'>
                <li className='hover:text-yellow-400 '>
                   <Link to="/">Home</Link>
                </li>
                <li className='hover:text-yellow-400 '>
                    <Link to="#" >About</Link>
                </li>
                <li className='hover:text-yellow-400 '>
                    <Link to="#" >Contact US</Link>

                </li>
                <li className='hover:text-yellow-400 '>
                    <Link to="/add-recipe">Add Recipe</Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Header
