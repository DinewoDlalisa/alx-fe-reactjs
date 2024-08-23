import create from 'zustand';

const useRecipeStore = create(set => ({
  recipes: [],
  addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe] })),
  deleteRecipe: (recipeId) => set(state => ({recipes: state.recipes.filter(recipe => recipe.id != recipeId)})),
  updateRecipe: (updateRecipe) => set(state=> ({recipes: state.recipes.map(recipe => recipe.id === updatedRecipe.id ? updatedRecipe: recipe)})),
  setRecipes: (recipes) => set({ recipes }),
  searchTerm: '',
  setSearchTerm: (term) => set(state=> {const newTerm = term.toLowerCase()
    return {
      searchTerm: newTerm,
      filteredRecipes: state.recipes.filter(recipe => recipe.title.toLowercase().includes(state.searchTerm.toLowerCase()))
    }
  })

}));

export {useRecipeStore};