import axios from "axios";

export const getResearchs = (callback) => {
  axios
    .get("http://localhost:8000/api/research")
    .then((res) => {
      callback(res.data);
    })
    .catch((error) => {
      console.log(error);
    });
};
export const getDetailProduct = (id, callback) => {
  axios
    .get(`https://fakestoreapi.com/products/${id}`)
    .then((res) => {
      callback(res.data);
    })
    .catch((error) => {
      console.log(error);
    });
};
