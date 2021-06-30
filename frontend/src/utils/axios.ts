import axios from "axios";
import { parseCookies } from "nookies";
const { "@maxihost.token": accessToken } = parseCookies();

export const api = axios.create({
  baseURL: "http://localhost:3333/",
});
