import axios from "axios";
import {BASE_URL} from "../constants/api"

export const axiosClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
