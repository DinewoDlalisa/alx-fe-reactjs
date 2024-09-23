import axios from "axios";

const API_URL = 'https://api.github.com/search/users?q={query}';
const API_KEY = process.env.REACT_APP_GITHUB_KEY;

export const searchGitHubUsers = async ({ username, location, minRepos }) => {
    let query = '';

    if (username) {
        query += `q=${username}`;
    }

    if (location) {
        query += `+location:${location}`;
    }

    if (minRepos) {
        query += `+repos:>=${minRepos}`;
    }

    const url = `https://api.github.com/search/users?q=${query}`;

    console.log(`Fetching from: ${url}`);

    return axios.get(url, {
        headers: {
            Authorization: `token ${API_KEY}`
        }
    });
};
