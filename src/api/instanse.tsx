import axios from "axios";

export const BASEAPPURL = " http://localhost:3004";
const instance = axios.create({
  // withCredentials: true,
  baseURL: BASEAPPURL,
  headers: {
    accept: "application/json",
  },
});

export default instance;
