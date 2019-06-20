import axios from "axios";

let initArticle = {
    articles: [],
    countryCode: 'au',
    category: 'general',
    isLoading: true,
};
const API_KEY = process.env.REACT_APP_API_KEY;
const API_END_POINT = process.env.REACT_APP_API_END_POINT;

const articleReducer = (state = initArticle, action: any) => {
    switch(action.type) {
        case "GET_ARTICLES":
            makeQuery(action.countryCode, action.category);
            state = {
                countryCode: action.countryCode,
                category: action.category,
                isLoading: false,
                articles: initArticle.articles
             };
            return state;
        case "GET_CATEGORY":
            return state.category;
        case "GET_COUNTRY":
            return state.countryCode;
        case "GET_LOADING_STATE":
            return state.isLoading;
        default:
            return state;
    }
};

async function makeQuery(countryCode: string, category: string)  {
    initArticle.isLoading = true;
    await axios.get(
      API_END_POINT +
        "top-headlines?country=" +
        countryCode +
        "&category=" +
        category +
        "&apiKey=" +
        API_KEY
    ).then(success => { 
        initArticle.articles = success.data.articles;
    }, error => {
        initArticle.articles = error;
    });
  };

export default articleReducer;
