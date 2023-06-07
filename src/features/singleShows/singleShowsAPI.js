import axios from "axios";

export const getSingleShows = async (id) => {
  const res = await axios.get(`https://api.tvmaze.com/shows/${id}`);
  return res.data;
};
