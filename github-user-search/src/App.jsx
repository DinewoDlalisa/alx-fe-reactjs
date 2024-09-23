import { useState, Suspense } from 'react';
import React from 'react';
import './App.css';
import { searchGitHubUsers } from './services/githubService';

const Search = React.lazy(() => import('./components/Search'));

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async ({ username, location, minRepos }) => {
    setLoading(true);
    setError('');
    setUsers([]);

    try {
      const response = await searchGitHubUsers({ username, location, minRepos });
      if (response.data.items.length === 0) {
        setError('No users found');
      } else {
        setUsers(response.data.items);
      }
    } catch (err) {
      setError('Looks like we can\'t find any users');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>GitHub User Search</h1>

     
      <Suspense fallback={<p>Loading search component...</p>}>
        <Search onSearch={handleSearch} users={users} loading={loading} error={error} />
      </Suspense>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      <div className="user-list">
        {users.length > 0 &&
          users.map((user) => (
            <div key={user.id} className="user-card">
              <img src={user.avatar_url} alt={user.login} />
              <h2>{user.login}</h2>
              <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                View Profile
              </a>
            </div>
          ))}
      </div>

      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src="./assets/react.svg" className="logo react" alt="React logo" />
        </a>
      </div>
    </div>
  );
}

export default App;
