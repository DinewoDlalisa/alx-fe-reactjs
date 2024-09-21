import { useEffect, useState } from 'react'
import React from 'react'
import { getUserData} from './services/gitHubService';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [count, setCount] = useState(0)
  const[userData, setUserData] = useState();
  const[error, setError]= useState();

  useEffect(()=> {
    
    getUserData('octocat')
    .then(response =>{
      setUserData(response.data);
    })
    .catch(error => {
      setError('Error fecthing user data.');
      console.error(error);
    });
    
  },[]);





  return (
    <>
     <div>
      <h1>GitHub User Search</h1>
      {error && <p>{error}</p>}
      {userData ? (
        <div>
          <h2>{userData.login}</h2>
          <p>{userData.bio}</p>
          <img src={userData.avatar_url} alt='Avatar' width='100'/>
          <a href={userData.html_url}>View Profile</a>
        </div>
      ):(
        <p> Loading...</p>
      )}
     </div>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App;
