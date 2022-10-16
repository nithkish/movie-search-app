import axios from "axios";
import {BASE_URL} from "../constants/api"


/**
 * @description axios instance created with base url and headers,
 * authorization header can be added
 * @return {axiosinstance} instance object
 */
export const axiosClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
