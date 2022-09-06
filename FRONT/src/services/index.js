import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;
const payloadLogin = {
  login: import.meta.env.VITE_LOGIN_TOKEN,
  senha: import.meta.env.VITE_PASS_TOKEN,
}

const services = () => {
  const authorization = async () => axios.post(`${apiUrl}/login`, payloadLogin)
      .then((res) => ({ Authorization: `Bearer ${res.data}` }))
      .catch((error) => {
        console.log(error);
      })

  let token;

  const getToken = async () => {
    token = await authorization();
  }

  const getCards = async () => {
    if (!token) await getToken();

    return axios.get(`${apiUrl}/cards`, { headers: token })
      .then((res) => res)
      .catch((error) => error)
      .finally(() => {
      });
  }

  const createCard = async (card) => {
    if (!token) await getToken();

    return axios.post(`${apiUrl}/cards`, card, { headers: token })
      .then((res) => res)
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
      });
  }

  const updateCard = async (card) => {
    if (!token) await getToken();

    return axios.put(`${apiUrl}/cards/${card.id}`, card, { headers: token })
      .then((res) => res)
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
      });
  }
  
  const deleteCard = async (id) => {
    if (!token) await getToken();

    return axios.delete(`${apiUrl}/cards/${id}`, { headers: token })
      .then((res) => res)
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
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