import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-e-commerce-site-7f454.cloudfunctions.net/api",
});

export default instance;
//http://localhost:5001/e-commerce-site-7f454/us-central1/api
