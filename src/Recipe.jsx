import React from 'react'

export default function Recipe({id, name, ingredients, instructions}) {
  return (
    <div key={id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200  max-w-md mx-auto">
      <div className="p-6 flex flex-col gap-4">
        <h2 className="font-bold text-3xl text-gray-800 border-b pb-2">{name}</h2>
      
        <div>
          <h3 className="font-semibold text-xl mb-2 text-gray-700">Ingredients</h3>
          <ul className="space-y-2">
            {ingredients.map((ingredient, index) => (
              <li className="flex items-center text-gray-600" key={index}>
                <span className="mr-2">•</span> {ingredient}
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h3 className="font-semibold text-xl mb-2 text-gray-700">Instructions</h3>
          <p className="text-gray-600 ">{instructions.slice(0,400)}</p>
        </div>
      </div>
    </div>
  )
}