import axios from "axios";

const apiKey = "5afdd1b1";

const omdbApi = {
  searchMovies: async (searchTerm) => {
    try {
      const response = await axios.get(
        `http://www.omdbapi.com/?s=${searchTerm}&apikey=${apiKey}`
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching data from OMDb API:", error);
      throw error;
    }
  },
};

export default omdbApi;
