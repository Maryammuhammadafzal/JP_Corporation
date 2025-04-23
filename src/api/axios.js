import axios from "axios";

const instance = axios.create({
  baseURL: "https://jp-corporation-admin.vercel.app",
  withCredentials: true, // for cookies / sessions if needed
});

export default instance;