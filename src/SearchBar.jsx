import React from 'react'

export default function SearchBar({recipes,setFilteredRecipes}) {
    const handleSearch =(e) => {
        const searchQuery = e.target.value.toLowerCase();

        const filtered = recipes.filter(recipe => 
            recipe.name.toLowerCase().includes(searchQuery)
        );

        setFilteredRecipes(filtered)
    };

    return (
        <div>
            <input className='' type="text" placeholder="search recipes" onChange={handleSearch}/>

        </div>
    )
}