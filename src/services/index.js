import axios from "axios";

const api = axios.create({
  baseURL: "https://api.mangadex.org/",
});
export default api;
