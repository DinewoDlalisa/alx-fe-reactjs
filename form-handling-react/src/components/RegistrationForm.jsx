import React, { useState} from 'react';

const RegistrationForm = () => {
    const [username, useUsername] = ('');
    const [email, useEmail]= ('');
    const [password, usePassword]= ('');


    const handleSubmit =(element) => {
        element.preventDefault();
        if (username && email && password) {
            console.log ({username, email, password });
        }
        else{
            alert('Fill in all required fields');
        }
        
    }
    return (
        <form on submit= {handleSubmit}>
            <div>
                <label>Username: </label>
                <input type='text' value={username} onChange={(element) => setUsername(element.target.value)}/>
            </div>
            <div>
                <label>Email:</label>
                <input type='email' value={email} onChange={(element)=> setEmail(element.target.value)}/>
            </div>
            <div>
                <label>Password:</label>
                <input type='password' value={password} onChange={(element)=> setPassword(element.target.value)}/>
            </div>
            <div>
                <button type='submit'>Register Here</button>
            </div>
        </form>
    )
};


export default RegistrationForm;
