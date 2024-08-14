import axios from "axios";
import { geners } from "../utils/url";

export const fetchTrends = async (genreNum) => {
    const options = {
        method: 'GET',
        url: `${import.meta.env.VITE_BASE_URL}${geners}?&with_genres=${genreNum}`,
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
        throw error; // Re-throw the error to handle it where this function is called, if needed
    }
};
