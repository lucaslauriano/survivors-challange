import axios from "axios";
import { parseCookies } from "nookies";
const { "@maxihost.token": accessToken } = parseCookies();

export const api = axios.create({
  // baseURL: process.env.NEXT_PUBLIC_API_URL,
  baseURL: "http://localhost:3000/api",
});
