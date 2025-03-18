import { useState, useEffect, use } from "react";
import Recipe from "./Recipe";

function RecipeList() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
    .then((res) => res.json())
    .then((data) => {
      setRecipes(data.meals);
    }).catch((err) => {
      console.error("fetching error",err)
    });
  },[])


 
  const Ingredients = (recipe) => {
    let ingredients = [];
    for (let i = 1; i <= 10; i++) {
      const ingredient = recipe[`strIngredient${i}`];
      if (ingredient) {
        ingredients.push(ingredient);
      }
    }
    return ingredients;
  };

  
  

  return (
    <div>
      <div className="flex flex-col gap-4 mt-2"> 
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.idMeal}
            id={recipe.idMeal}
            name={recipe.strMeal}
            ingredients={Ingredients(recipe)}
            instructions={recipe.strInstructions} 
          />
        ))}
      </div>
    </div>
  );
}

export default RecipeList;
