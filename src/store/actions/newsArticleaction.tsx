import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;
const API_END_POINT = process.env.REACT_APP_API_END_POINT;

export const makeQuery = async(countryCode: string, category: string) =>  {
    let response = await axios.get(
      API_END_POINT +
        "top-headlines?country=" +
        countryCode +
        "&category=" +
        category +
        "&apiKey=" +
        API_KEY
    );
    return response.data.articles;
  };

