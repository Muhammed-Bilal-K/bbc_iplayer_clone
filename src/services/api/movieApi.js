import axios from "axios";
import { trends } from "../utils/url";

export const GetStream = async () => {
  const options = {
    method: 'GET',
    url: `${import.meta.env.VITE_BASE_URL}${trends}language=en-US&page=1`,
    headers: {
      accept: 'application/json',
      Authorization: import.meta.env.VITE_TMDB_API
    }
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw error; 
  }
};
