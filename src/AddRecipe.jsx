import React, { useState } from 'react'
import AddRecipeForm from './AddRecipeForm';
export default function AddRecipe() {
    const [name, setName] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [instruction, setInstruction] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const newRecipe = {
            name,
            ingredients: ingredients.split(',').map((item) => item.trim()),
            instruction,
        }
     console.log('new recipe', newRecipe)
    }
    
    return (
        <div className=" p-6 rounded-lg flex justify-self-center flex-col gap-2 border mt-10 w-1/2">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">New Recipe</h2>
        
                        
            <AddRecipeForm
                name={name}
                setName={setName}
                ingredients={ingredients}
                setIngredients={setIngredients}
                instruction={instruction}
                setInstruction={setInstruction}
                handleSubmit={handleSubmit}
            />
        </div>
       
    )
}