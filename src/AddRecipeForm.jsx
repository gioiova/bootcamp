import React from 'react'

export default function AddRecipeForm({ 
  name, 
  setName, 
  ingredients, 
  setIngredients, 
  instruction, 
  setInstruction, 
  handleSubmit 
}) {
  return (
    <form onSubmit={handleSubmit} className="space-y-4 ">
      <div className="flex flex-col">
        <label htmlFor="name" className="mb-1 font-medium text-gray-700">Recipe Name</label>
        <input 
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="border border-gray-300 p-2 rounded  "
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="ingredients" className="mb-1 font-medium text-gray-700">Ingredients</label>
        <input
          type="text"
          id="ingredients"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          required
          className="border border-gray-300 p-2 rounded "
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="instruction" className="mb-1 font-medium text-gray-700">Instructions</label>
        <textarea
          id="instruction"
          value={instruction}
          onChange={(e) => setInstruction(e.target.value)}
          className="border border-gray-300 p-2 rounded h-32 "
        />
      </div>

      <button 
        type="submit" 
        className="bg-red-500 text-white py-2 px-4 rounded hover:bg-purple-600 transition-colors"
      >
        Add Recipe
      </button>
    </form>
  )
}