import React, { useState, useEffect } from "react";
import { searchGitHubUsers } from "../services/githubService";

const Search = ({ onSearch }) => {
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [users, setUsers] = useState([]);
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
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
      } catch (err) {
        setError("Looks like we can't find the user");
      } finally {
        setLoading(false);
      }
    }
    if (username.trim()) {
      onSearch({ username, location, minRepos });
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={username}
          onChange={(element) => setUsername(element.target.value)}
          placeholder="Enter username"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          value={location}
          onChange={(element) => setLocation(element.target.value)}
          placeholder="Location"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="number"
          value={minRepos}
          onChange={(element) => setMinRepos(element.target.value)}
          placeholder="Minimum Repositories"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          value={query}
          onChange={(element) => setQuery(element.target.value)}
          placeholder="Search GitHub users"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
        >
          Search
        </button>
      </form>

      {loading && <p className="mt-4 text-gray-500">Loading...</p>}
      {error && <p className="mt-4 text-red-500">{error}</p>}
      {users.length > 0 && (
        <div className="mt-4 space-y-4">
          {users.map(user => (
            <div key={user.id} className="flex items-center border p-4 rounded shadow">
              <img src={user.avatar_url} alt={user.login} width="100" className="rounded-full" />
              <div className="ml-4">
                <h2 className="text-lg font-semibold">{user.login}</h2>
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  View Profile
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
