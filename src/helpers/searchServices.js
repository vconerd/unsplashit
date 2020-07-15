import { apiClient, apiClientId } from "@/helpers/http.js";

const apiUrl = "https://api.unsplash.com/search/photos";

const apiSearchParams = {
  params: {
    page: 1,
    per_page: 30,
    query: "",
    client_id: apiClientId
  }
};

export default {
  // Retorna una promesa generada por Axios, ya sea para que maneje
  // la respuesta, o para que maneje un error de consulta.
  searchApi(keywords, page) {
    apiSearchParams.params.page = page;
    apiSearchParams.params.query = keywords;
    return apiClient.get(apiUrl, apiSearchParams);
  }
};
