import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com";

export const getPosts = (pageParam = 1) => {
  return axios
    .get(`${BASE_URL}/posts?_page=${pageParam}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error("Error:", error);
      throw error;
    });
};
