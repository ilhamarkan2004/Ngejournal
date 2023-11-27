import axios from "axios";

export const getResearchs = (callback) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer" + localStorage.getItem("token"),
    },
  };
  axios
    .get("http://127.0.0.1:8000/api/research", config)
    .then((res) => {
      callback(res.data.data.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const addResearch = (callback) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer" + localStorage.getItem("token"),
    },
  };
 axios
   .post("http://127.0.0.1:8000/api/research", data,config)
   .then((res) => {
     callback(true, res.data.data);
   })
   .catch((error) => {
     callback(false, error);
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
