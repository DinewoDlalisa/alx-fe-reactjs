import React, {useState} from "react";
import { fetchUserData } from '../services/githubService';
import { useState, useEffect } from "react";

const Search = ({ onSearch }) => {
    const [username, setUsername] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [users, setUsers] = useState([]);
    const [location, setLocation] = useState('')
    const [minRepos, setMinRepos]= useState('')
    const [query, setQuery] = useState('');

    useEffect(() => {
        const handler = setTimeout(() => {
          if (query) {
            onSearch(query);
          }
        }, 300);
    
        return () => {
          clearTimeout(handler);
        };
      }, [query, onSearch]);
    

    const handleSubmit = async (element) => {
        element.preventDefault();
        if (username.trim()) {
           setLoading(true);
           setError('');
           setUsers([]);
           try {
            const fetchedUsers = await onSearch(username);
            setUsers(fetchedUsers);
           }catch (err) {
            setError("Looks like we cant find the user");
           } finally {
            setLoading(false);
           }
        }
        if (username.trim()){
            onSearch ({ username, location, minRepos });
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={username} onChange={(element)=> setUsername(element.target.value)} placeholder="Enter username"/>
                <input type="text" value={location} onChange={(element) => setLocation(element.target.value)} placeholder="Location"/>
                <input type="number" value={minRepos} onChange={(element) => setMinRepos(element.target.value)} placeholder="Minimum Repositories"/>
                <input type="text" value={query} onChange={(element) => setQuery(element.target.value)} placeholder="Search Github users"/>
                <button type="submit">Search</button>
            </form>
           
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {users.length > 0 && (
                <div>
                    {users.map(user => (
                        <div key={user.id}>
                            <img src={user.avatar_url} alt={user.login} width="100" />
                            <h2>{user.login}</h2>
                            <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                                View Profile
                            </a>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
                
export default Search;

