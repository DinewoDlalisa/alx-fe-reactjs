import React, {useState} from "react";

const Search = ({ onSearch, users, loading, error }) => {
    const [username, setUsername] = useState('');

    const handleSubmit = (element) => {
        element.preventDefault();
        if (username.trim()) {
            onSearch(username);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={username} onChange={(element)=> setUsername(element.target.value)} placeholder="Enter username"/>
                <button type="submit">Search</button>
            </form>
        </div>
    );
};


export default Search;

