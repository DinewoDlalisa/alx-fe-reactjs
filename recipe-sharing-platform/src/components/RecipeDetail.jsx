import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";


const RecipeDetail =() => {
    const {id} = useParams();
    const[recipe, setRecipe] = useState(null);


    useEffect(() => {
        fetch('/src/data.json')
           .then((response) => response.json())
           .then((data)=> {const selectedRecipe= data.find((item)=> item.id = parseInt(id));
            setRecipe(selectedRecipe);
            })
           .catch((error) => console.error('Error loading data:', error));

    },[id]);
     
    if (!recipe) {
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
            <img src= {recipe.image} alt={recipe.title} className="w-full h-64 object-cover mb-4 rounded-lg shadow-lg"/>

            <div className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
                <ul className="list-disc list-inside">
                    {recipe.ingredients.map((ingredient, index) => (
                        <li key ={index}>{ingredient}</li>
                    )

                     )}
                </ul>

            </div>
            <div className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">Instructions</h2>
                <ol className="list-decimal list-inside">
                    {recipe.instructions.map((step, index) =>(
                       <li key={index} className="mb-2">{step}</li>
                    ))}
                    
                </ol>
            </div>
            <a href="/" className="text-blue-500 hover:underling">Return to Home</a>
        </div>
    }
}







export default RecipeDetail;