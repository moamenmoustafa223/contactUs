// create apiClient with swr
import axios from 'axios';

const baseURL = 'https://api.carwins.app';
// const baseURL = import.meta.env.VITE_BASE_URL;


export const apiClient = axios.create({
  baseURL,
});

// Basic error handling
apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Handle the error here, e.g., log it or display a user-friendly message.
    console.error('API Error:', error);
    return Promise.reject(error);
  }
);


export function convertQueryToQueryString(query) {
  const queryString = Object.keys(query)
    .map(key => {
      const value = query[key];
      if (Array.isArray(value)) {
        // If the value is an array, create multiple query string parameters with the same key.
        return value.map(val => `${encodeURIComponent(key)}=${encodeURIComponent(val)}`).join('&');
      } else {
        return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
      }
    })
    .join('&');

  return queryString;
}

// // Example usage:
// const query = {
//   name: 'John Doe',
//   age: 30,
//   interests: ['hiking', 'reading', 'coding'],
// };

// const queryString = convertQueryToQueryString(query);
// console.log(queryString);
