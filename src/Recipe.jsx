import React from 'react'
export default function Recipe  ({id,name,ingredients}) {
  return (
    <div key={id} className='flex justify-between gap-4 flex-col p-4'>
        <h2 className='font-bold text-3xl'>{name}</h2>
        <ul className='flex flex-col gap-4'>
            {ingredients.map((ingredient,index) => <li className='text-bold text-xl' key={index}> {ingredient}</li>)}
        </ul>

    </div>
  )
}

