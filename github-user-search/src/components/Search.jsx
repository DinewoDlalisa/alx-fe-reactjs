import React, {useState} from "react";
import { fetchUserData } from '../services/githubService';

const Search = () => {
    const [username, setUsername] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [users, setUsers] = useState([]);

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
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={username} onChange={(element)=> setUsername(element.target.value)} placeholder="Enter username"/>
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

