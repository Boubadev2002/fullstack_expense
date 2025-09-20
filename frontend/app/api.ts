import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
if (!BASE_URL) {
  throw new Error("NEXT_PUBLIC_API_URL n'est pas défini !");
}

const api = axios.create({
  baseURL: `${BASE_URL.replace(/\/$/, "")}/api/`,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
