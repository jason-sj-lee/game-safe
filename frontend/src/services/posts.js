import axios from "axios";
const baseUrl = "/api/posts";

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => {
    return response.data;
  });
};

export default {
  getAll,
};
