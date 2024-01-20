import axios from "axios";

axios.defaults.baseURL = "https://65a9960b219bfa3718697f8a.mockapi.io/";

export const fetchAdverts = async () => {
  try {
    const { data } = await axios.get("advert");
    return data;
  } catch (error) {
    console.error("Error fetching adverts:", error);
  }
};
