import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://192.168.14.139:8080",
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;
