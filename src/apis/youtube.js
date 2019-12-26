import axios from "axios";

const KEY = "AIzaSyCe5SyB0nPy7kq_Cg-y96cbcedrenza-58";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: `${KEY}`
  }
});
