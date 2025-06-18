/**
 * ---------------------------------------------------
 * HTTP Interceptor & Axios
 * ---------------------------------------------------
 * */

import axios from "axios";

export const httpApi = axios.create({
  baseURL: process.env.NEXT_ENV_API_SERVER,
})
