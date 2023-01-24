import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID 67Pn2Oo6N74C8iM31mIP1ADYFOkk-hgF9EUf9KnqbjA",
  },
});
