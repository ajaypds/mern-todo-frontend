// // httpService.js
// import axios from 'axios';
// import conf from '../conf/conf';

// const apiService = axios.create({
//     baseURL: conf.apiURL,
//     headers: {
//         'Content-Type': 'application/json',
//     },
// });

// // Response handler
// const handleResponse = (response) => {
//     // Handle common response logic here
//     return response.data;
// };

// const handleError = (error) => {
//     // Handle common error logic here
//     console.error('API call failed:', error?.response?.data?.message);
//     error.message = error?.response?.data?.message
//     throw error;
// };

// function get() {
//     return async (url, config = {}) => {
//         return await apiService.get(url, config).then(handleResponse).catch(handleError);
//     }
// }

// function post() {
//     return async (url, data, config = {}) => {
//         return await apiService.post(url, data, config).then(handleResponse).catch(handleError);
//     }
// }

// function put() {
//     return async (url, data, config = {}) => {
//         return await apiService.put(url, data, config).then(handleResponse).catch(handleError);
//     }
// }

// function del() {
//     return async (url, config = {}) => {
//         return await apiService.delete(url, config).then(handleResponse).catch(handleError);
//     }
// }

// const apiRequest = {
//     get: get(), post: post(), put: put(), delete: del()
// }
// export default apiRequest 


import axios from 'axios';
import conf from '../conf/conf';

const apiService = axios.create({
    baseURL: conf.apiURL,
    headers: {
        'Content-Type': 'application/json',
    },
});

const handleResponse = (response) => response.data;

const handleError = (error) => {
    console.error('API call failed:', error?.response?.data?.message);
    error.message = error?.response?.data?.message;
    throw error;
};

function createRequest(method) {
    return async (url, data, config = {}) => {
        return await apiService[method](url, data, config).then(handleResponse).catch(handleError);
    }
};

const apiRequest = {
    get: createRequest('get'),
    post: createRequest('post'),
    put: createRequest('put'),
    delete: createRequest('delete'),
};

export default apiRequest;
