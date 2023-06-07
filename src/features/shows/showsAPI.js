// import axios from "../../utils/axiosIntance";

import axios from "axios";

export const getAllShows = async () => {
  const res = await axios.get("https://api.tvmaze.com/search/shows?q=all");
  return res.data;
};
