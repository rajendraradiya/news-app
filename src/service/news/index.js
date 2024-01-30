const news = (axios) => ({
  getNewsList(params) {
   return axios.get("/search?api-key=test&show-fields=thumbnail,headline", { params: params });
  },
});

export default news;
