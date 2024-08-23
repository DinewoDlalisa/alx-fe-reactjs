// RecipeList component
import React,{useEffect} from 'react';
import { useRecipeStore } from './recipeStore';
import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';

const RecipeList = () => {
  const recipes = useRecipeStore(state => state.recipes);
  const filterRecipes = useRecipeStore(state => state.filterRecipes);

  useEffect(()=> {
    filterRecipes();
  },[filterRecipes]);

  return (
    <div>
      <SearchBar />
    <div>
      {recipes.length > 0 ? (recipes.map(recipe => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
       ))
      ):(
       <p>No recipe</p>
      )}
      </div>
    </div>
  );
};

export default RecipeList;