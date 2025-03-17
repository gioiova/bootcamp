import React from 'react'
import {recipes} from './data'
import Recipe from './Recipe'
import {useState} from 'react';
import SearchBar from './SearchBar';

export default function RecipeList  ()  {
    const[filteredRecipes,setFilterdRecipes] = useState(recipes)

  return (
    <div className='flex items-center justify-center mt-20'> 

        <SearchBar recipes={recipes} setFilteredRecipes={setFilterdRecipes} />

        {filteredRecipes.map(recipe => 
            <Recipe
            key={recipe.id}
            id={recipe.id}
            name={recipe.name}
            ingredients={recipe.ingredients} />
        )}
    </div>
  )
}
