// httpService.js
import axios from 'axios';
import conf from '../conf/conf';

const apiService = axios.create({
    baseURL: conf.apiURL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Response handler
const handleResponse = (response) => {
    // Handle common response logic here
    return response.data;
};

const handleError = (error) => {
    // Handle common error logic here
    console.error('API call failed:', error);
    throw error;
};

export const get = (url, config = {}) =>
    apiService.get(url, config).then(handleResponse).catch(handleError);

export const post = (url, data, config = {}) =>
    apiService.post(url, data, config).then(handleResponse).catch(handleError);

export const put = (url, data, config = {}) =>
    apiService.put(url, data, config).then(handleResponse).catch(handleError);

export const patch = (url, data, config = {}) =>
    apiService.patch(url, data, config).then(handleResponse).catch(handleError);

export const del = (url, config = {}) =>
    apiService.delete(url, config).then(handleResponse).catch(handleError);

export default apiService;
