import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import axios from "axios";

axios.interceptors.request.use(
  (config) => {
    console.log(config, "request");
    return config;
  },
  (error) => {
    console.log("this was a request error");
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    console.log(response, "response");
    return response;
  },
  (error) => {
    console.log("this was a reponse error");
    return Promise.reject(error);
  }
);
ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
