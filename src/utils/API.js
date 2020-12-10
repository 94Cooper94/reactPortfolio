import axios from "axios";
const random_URL = "https://dog.ceo/api/breeds/image/random";

export default {
  search: function() {
    return axios.get(random_URL);
  }
};


// import axios from "axios";
// const search_URL = `https://dog.ceo/api/breed/${query}/images/random`;

// export default {
//   search: function(query) {
//     return axios.get(search_URL);
//   }
// };