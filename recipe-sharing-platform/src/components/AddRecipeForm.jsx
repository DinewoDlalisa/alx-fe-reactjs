import React, { useState } from "react";


const AddRecipeForm = () => {
    const [title, setTitle] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [steps, setSteps] = useState ('');
    const [error, setError] = useState ('');


    const handleSubmit = (element) => {
        element.preventDefault();
        if (!title || !ingredients || !steps) {
            setError('Each field is mandatory');
            return;
        }

        setError('');
        console.log('Reciped added:', {title, ingredients, steps});


        setTitle('');
        setIngredients('');
        setSteps('');
    };

    return (
        <div className="max-w-lg mx-auto mt-8 p-6 bg-white shadow-md rounded-md">
            <h2 className="text-2xl font-bold mb-7">Add New Recipe</h2>
            {error & <p className="text-red-500 mb-4"> {error}</p>}

            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold">Recipe title </label>
                    <input 
                        type="text"
                        value={title}
                        onChange={(element) => setTitle(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md"
                        placeholder="Enter recipe title"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Ingredients</label>
                    <textarea 
                      value={steps} 
                      onChange={(element) => setSteps(element.target.value)}
                      className="w-full p- border border-gray-300 rounded-md"
                      placeholder="Enter preparations instructions"
                    

                    ></textarea>
                </div>
                <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">Submit</button>
            </form>

        </div>
    );

};


export default AddRecipeForm; 