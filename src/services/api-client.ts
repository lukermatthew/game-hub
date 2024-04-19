import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "c0b504cf052b450b985215f4c1ca86d4",
  },
});
