import React, { useState } from "react";


const AddRecipeForm = () => {
   const[formData, setFormData] = useState({
    title: '',
    ingredients: '',
    steps: ''
   });

   const [errors, setErrors] = useState({});
   const handleInputChange = (element) => {
    const {name, value } = element.target;
    setFormData({
        ...formData,
        [name]: value,
    });
   };
   const validate = () => {
    let newErrors ={};

    if(!formData.title.trim()){
        newErrors.title = 'Recipe title required.';
    }
    if(!formData.ingredients.trim()){
        newErrors.ingredients = 'Add at least one ingredient'
    }
    if (!formData.steps.trim()){
        newErrors.steps = 'Recipe preparation steps required.'
    }
    return newErrors;
   };


    const handleSubmit = (element) => {
        element.preventDefault();

        const newErrors = validate();
        setErrors(newErrors);

        if (Object.keys(newErrors).length =0) {
           
            console.log('Form submitted', formData);
            setFormData({
                title:'',
                ingredients: '',
                steps: '',
            });
        }else {
            console.log('Form has validation errors');
        }
    };

    return (
        <div className="max-w-lg mx-auto mt-8 p-6 bg-white shadow-md rounded-md">
            <h2 className="text-2xl font-bold mb-7">Add New Recipe</h2>

            <form onSubmit={handleSubmit} className="space-y">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold">Recipe title </label>
                    <input 
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-300 rounded-md"
    
                    />
                    {errors.title & <p className="text-red-500 text-sm">{errors.title}</p>}
                </div>
                <div>
                    <label className="block text-gray-700 font-semibold mb-2">Ingredients</label>
                    <textarea 
                        name="ingredients"
                        value={formData.ingredients}
                        onChange={handleInputChange}
                        className="border border-gray-300 p-2 w-full rounded-md"
                        rows="4"
                    />
                    {errors.ingredients & <p className="text-red-500 text-sm">{errors.ingredients}</p>}
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Ingredients</label>
                    <textarea 
                      name="steps"
                      value={formData.steps} 
                      onChange={handleInputChange}
                      className="w-full p- border border-gray-300 rounded-md"
                      rows="6"
                    

                    />
                    {errors.steps & <p className="text-red-500 test-sm">{errors.steps}</p>}
                </div>
                <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">Submit</button>
            </form>

        </div>
    );

};


export default AddRecipeForm; 