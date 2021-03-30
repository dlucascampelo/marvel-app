import axios from "axios";
import { API_KEY, TS, HASH } from "@env";

const api = axios.create({
  baseURL: "https://gateway.marvel.com/v1/public",
  params: {
    ts: TS,
    apikey: API_KEY,
    hash: HASH,
  },
});
export default api;
