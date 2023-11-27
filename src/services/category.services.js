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
