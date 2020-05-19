import axios from 'axios';

// We are going to create an Axios configuration that attaches an Authorization: <token> header to requests.
// To do that, we will create a new file called axiosAuth.js. Whenever the application needs to exchange data with a protected endpoint,
// it imports this module, instead of the usual import axios from "axios";.


export const authAxios =() => {
    const token = localStorage.getItem('token');

    return axios.create({
        baseUrl:`http://localhost:5010`,
        headers: {
            Authorization: token,
        },
        username: 'Lambda School',
        password: 'i<3Lambd4'
    });
};
