import React from 'react';
import { useParams } from 'react-router-dom';
import {useRecipeStore} from '../recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';




const RecipeDetails = () => {
    const{ id: recipeId } = useParams();
    const recipe = useRecipeStore (state=> state.recipes.find(recipe => recipe.id === parseInt(recipeId)));

    if (!recipe) return <p>Recipe not found</p>;

    return (
        <div>
          <h1>{recipe.title}</h1>
          <p>{recipe.description}</p>
          {/* Render EditRecipeForm and DeleteRecipeButton here */}
          <EditRecipeForm recipe={recipe}/>
          <DeleteRecipeButton recipeId={recipeId} />
        </div>
    );
    
    
    
};


export default RecipeDetails;