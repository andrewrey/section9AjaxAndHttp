import axios from "axios";

const instance = axios.create({
  baseURL: `https://jsonplaceholder.typicode.com`,
});

instance.defaults.headers.common["Authorization"] = "AUTH TOKEN FROM INSTANCE";

instance.interceptors.request.use(
  (config) => {
    console.log(config, "request");
    return config;
  },
  (error) => {
    console.log("this was a request error");
    return Promise.reject(error);
  }
);

export default instance;
