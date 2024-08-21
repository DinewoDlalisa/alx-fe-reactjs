import React from 'react';
import {useRecipeStore} from './recipeStore';

const DeleteRecipeButton = ({ recipeId }) => {
    const deleteRecipe = useRecipeStore(state => state.DeleteRecipeButton);

    return (
        <button onClick={() => deleteRecipe(recipeId)}>Delete Recipe</button>

    );
};

export default DeleteRecipeButton;