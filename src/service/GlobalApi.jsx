import axios from "axios";

export const GetPlaceImage = async (city) => {

    try {

        const response = await axios.get(
            `https://api.unsplash.com/search/photos?query=${city}&client_id=${import.meta.env.VITE_UNSPLASH_ACCESS_KEY}`
        );

        return response.data.results[0]?.urls?.regular;

    } catch (error) {

        console.log("Unsplash Error:", error);

        return null;
    }
};