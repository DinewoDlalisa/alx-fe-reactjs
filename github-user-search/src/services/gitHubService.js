import axios from 'axios';

export const getUserData= (username) => {
    const apiKey = process.env.REACT_APP_GITHUB_API_KEY;

    return axios.get ('https://api.github.com/users/${username}', {headers: {
        Authorization: 'token ${apiKey}'
    }
});
};

export default gitHubSerice;
