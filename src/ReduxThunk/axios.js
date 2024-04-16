import axios from "axios";

const getData = () => {
  return axios.get("https://jsonplaceholder.typicode.com/todos")
    .then(response => response.data)
    .catch(error => {
      throw error;
    });
};

export default getData;
