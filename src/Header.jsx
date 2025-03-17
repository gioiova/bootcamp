import React from 'react'

const Header = () => {
  return (
    <div className='bg-red-500 p-4'>
        <nav>
            <ul className='flex justify-around text-white'>
                <li className='hover:text-yellow-400 '>
                    <a href="#">Home</a>
                </li>
                <li className='hover:text-yellow-400 '>
                    <a href="#">About</a>
                </li>
                <li className='hover:text-yellow-400 '>
                    <a href="#">Contact Us</a>
                </li>
                <li className='hover:text-yellow-400 '>
                    <a href="#">Recipes</a>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Header
