import axios from "axios";

const API_URL = 'https://api.github.com';
const API_KEY = process.env.REACT_APP_GITHUB_KEY;


export const fetchUserData = async (username) => {
    const response = await axios.get('${API_URL}/search/users', {
        headers: {
            Authorization: 'token ${API_KEY}'

        }
    });
    return response.data;
};

export const searchGitHubUsers = (username) => {
    return axios.get('${API_URL}/search/users', {
        params: { q: username },
        headers: {Authorization: 'token ${API_KEY}'}
    });
};