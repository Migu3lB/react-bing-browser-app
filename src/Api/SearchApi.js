import axios from "axios";
const endpointUrl = "https://api.bing.microsoft.com/v7.0/search";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  GetResults(query,suscriptionKey) {  
    if (!query) return Promise.resolve({})
    const queryurl = endpointUrl + "?q=" + encodeURIComponent(query);
    return axios
      .get(queryurl, {
        headers: { "Ocp-Apim-Subscription-Key": suscriptionKey },
      })
      .catch((error) => {
        console.log("Error: " + error.message);
        throw error;
      });
  },
};
