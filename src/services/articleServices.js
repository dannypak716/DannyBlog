import axiosWithAuth from "./../utils/axiosWithAuth";

const articleService = (stateSetter) => {
  axiosWithAuth()
    .get("http://localhost:5000/api/articles")
    .then((response) => {
      return stateSetter(response.data);
    })
    .catch((error) => {
      console.error("ERROR: CANNOT RETRIEVE ARTICLES", error);
    });
};

export default articleService;

//Task List:
//1. Complete articleServices. This module should make an authenticated call and return an array of those articles.