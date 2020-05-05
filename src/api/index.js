import axios from "../axios-movies";
const API_KEY = process.env.REACT_APP_API_KEY;

const query = `?api_key=${API_KEY}&language=en-US`;

export const fetchMoviesAPI = (url) => {
  return axios.get(`${url}${query}`);
};
