import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;
const payloadLogin = {
  login: import.meta.env.VITE_LOGIN_TOKEN,
  senha: import.meta.env.VITE_PASS_TOKEN,
}

const services = () => {
  const getToken = async () => {
    axios.post(`${apiUrl}/login`, payloadLogin)
      .then(function (res) {
        console.log(res);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
      });
  }

  let token;

  const requestToken = async () => {
    token = await getToken();
  }

  const getCards = async () => {
    await requestToken();

    return axios.get(`${apiUrl}/cards`, { headers: token })
      .then(function (res) {
        console.log(res);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
      });
  }

  const createCard = async (card) => {
    await requestToken();

    return axios.post(`${apiUrl}/cards`, card, { headers: token })
      .then(function (res) {
        console.log(res);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
      });
  }

  const updateCard = async (card) => {
    await requestToken();

    return axios.put(`${apiUrl}/cards/${card.id}`, card, { headers: token })
      .then(function (res) {
        console.log(res);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
      });
  }
  
  const deleteCard = async (card) => {
    await requestToken();

    return axios.delete(`${apiUrl}/cards/${card.id}`, { headers: token })
      .then(function (res) {
        console.log(res);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
      });
  }

  return {
    getCards,
    createCard,
    updateCard,
    deleteCard,
  };
}

export default services;