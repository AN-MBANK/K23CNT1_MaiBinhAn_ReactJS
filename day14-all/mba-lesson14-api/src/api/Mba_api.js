import axios from "axios";

const MbaAxiosUsers = axios.create({
  baseURL: "https:// 67d981e500348dd3e2ab64f2 .mockapi.io /K23CNT1_maibinhan / :endpoint", // Cổng của JSON Server
  headers: {
    "Content-Type": "application/json",
  },
});
export default MbaAxiosUsers;