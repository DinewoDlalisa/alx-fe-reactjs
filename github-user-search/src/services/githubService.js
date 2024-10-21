import axios from "axios";

const API_URL = 'https://api.github.com/search/users';
const API_KEY = process.env.REACT_APP_GITHUB_KEY;

export const fetchUserData = async ({ username, location, minRepos }) => {
    try {
        let query =[];

        if (username){
            query.push('q=${username}');
        }

        if (location) {
            query.push('location:${location');
        }
        if (minRepos) {
            query.push('repos:>=${minRepos}');
        }



        const queryString =query.length> 0 ? query.join('+'): '';

        const url ='${API_URL}?q=${queryString}';

        const response = await axios.get('https://api.github.com/search/users?q={query}', {
            headers: {
                Authorization: 'token ${API_KEY}',
            }
        });


        return response.data;
    } catch (error) {
        console.error('Error fetcing GitHub users:',error);
        throw new Error('Failed to fetch Github users');
    }
   

   
};

export default {
    fetchUserData,
};