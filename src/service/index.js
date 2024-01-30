import news from "@/service/news";
import axios from "@/plugin/axios";

const apis = {
  news: news(axios),
};

export default apis;
