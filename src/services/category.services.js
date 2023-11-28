import axios from "axios";

export const getCategory = (callback) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer" + localStorage.getItem("token"),
    },
  };
  axios
    .get("http://127.0.0.1:8000/api/research/category", config)
    .then((res) => {
      callback(res.data.data);
    })
    .catch((error) => {
      console.log(error);
    });
};


export const addCategory = (data, callback) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  };
  axios
    .post("http://127.0.0.1:8000/api/research/category", data, config)
    .then((res) => {
      callback(true, res);
    })
    .catch((error) => {
      callback(false, error);
    });
};
