import axios from "axios";

const api = axios.create({
  baseURL: "https://api.mangadex.org/",
  headers: {
    "Access-Control-Allow-Origin": "https://manga-jinxs.vercel.app/",
  },
});
export default api;
