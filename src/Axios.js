import axios from "axios";

const instance = axios.create({
  // baseURL: "https://amazon-clone-backend-shri.herokuapp.com/",
  // baseURL: "http://localhost:5000/",
  baseURL: "https://amazon-backend-production-1d52.up.railway.app",
});

export default instance;
