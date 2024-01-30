import axios from "axios";
let config = {
  baseURL: import.meta.env.VITE_BASE_URL || "",
};

const axiosInstance = axios.create(config);

// Add a request interceptor
axiosInstance.interceptors.request.use(function (config) {
  // Do something before request is sent
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
axiosInstance.interceptors.response.use(function (res) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return res.data.response;
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error);
});

export default axiosInstance;
