import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;
const payloadLogin = {
  login: import.meta.env.VITE_LOGIN_TOKEN,
  senha: import.meta.env.VITE_PASS_TOKEN,
}

const services = () => {
  const authorization = async () => {
    return await axios.post(`${apiUrl}/login`, payloadLogin)
      .then(function (res) {
        return { Authorization: `Bearer ${res.data}` }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  let token = undefined;

  const getToken = async () => {
    token = await authorization();
  }

  const getCards = async () => {
    if (!token) await getToken();

    return await axios.get(`${apiUrl}/cards`, { headers: token })
      .then(function (res) {
        return res.data;
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
      });
  }

  const createCard = async (card) => {
    await getToken();

    return await axios.post(`${apiUrl}/cards`, card, { headers: token })
      .then(function (res) {
        console.log(res);
        return res.data;
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
      });
  }

  const updateCard = async (card) => {
    await getToken();

    return await axios.put(`${apiUrl}/cards/${card.id}`, card, { headers: token })
      .then(function (res) {
        console.log(res);
        return res.data
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
      });
  }
  
  const deleteCard = async (card) => {
    await getToken();

    return await axios.delete(`${apiUrl}/cards/${card.id}`, { headers: token })
      .then(function (res) {
        console.log(res);
        return res.data;
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