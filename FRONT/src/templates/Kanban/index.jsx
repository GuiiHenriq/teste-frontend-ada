import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { Header, KanbanContainer, KanbanList } from './styles';
import services from '../../services/index';
import Columns from '../../components/organisms/Columns';
import Card from '../../components/molecules/Card';
import Modal from '../../components/atoms/Modal';

const { getCards, createCard, updateCard, deleteCard } = services();

function Kanban() {
  const [cards, setCards] = useState([]);
  const [activeModal, setActiveModal] = useState(false);

  const notify = (text, type) => {
    toast[type](text, {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const setNewCard = lista => async (titulo, conteudo) => {
    const newCard = { lista, titulo, conteudo };
    const savedCard = await createCard(newCard);

    if(savedCard.status === 201) {
      setCards([savedCard.data, ...cards]);
      notify('Card criado com sucesso!', 'success');
    }

    if(savedCard.status === 400) {
      notify('Card inválido, tente novamente...', 'error');
    }

    if(savedCard.status === 401) {
      notify('Token inválido, tente novamente...', 'error');
    }
  }

  const setUpdateCard = id => async (titulo, conteudo) => {
    const card = cards.find(item => item.id === id);
    if (!card) return;
    const newCard = { ...card, titulo, conteudo };
    const savedCard = await updateCard(newCard);
    const dataCard = savedCard.data;
    const newCards = cards.reduce((res, item) => item.id === dataCard.id ? [...res, dataCard] : [...res, item], []);

    if(savedCard.status === 200) {
      setCards(newCards);
      notify('Card atualizado com sucesso!', 'success');
    }

    if(savedCard.status === 400) {
      notify('Card inválido, tente novamente...', 'error');
    }

    if(savedCard.status === 401) {
      notify('Token inválido, tente novamente...', 'error');
    }
  }

  const setDeleteCard = id => async () => {
    const card = cards.find(item => item.id === id);
    if (!card) return;
    const othersCards = await deleteCard(id);

    if(othersCards.status === 200) {
      setCards(othersCards.data);
      notify('Card removido com sucesso!', 'success');
    }

    if(othersCards.status === 400) {
      notify('Card inválido, tente novamente...', 'error');
    }

    if(othersCards.status === 401) {
      notify('Token inválido, tente novamente...', 'error');
    }
  }

  const getNextIndex = (type, arr, action) => {
    const startIndex = arr.findIndex(obj => obj === type);
    return action === 'next' ? arr[startIndex + 1] : arr[startIndex - 1];
  }

  const changeType = (action, type, id, arr) => async () => {
    const typeAction = getNextIndex(type, arr, action);

    const card = cards.find(item => item.id === id);
    if (card) {
      const newCard = { ...card, lista: typeAction };
      const savedCard = await updateCard(newCard);
      const dataCard = savedCard.data;
      const newCards = cards.reduce((res, item) => item.id === dataCard.id ? [...res, dataCard] : [...res, item], []);
      setCards(newCards);
    }
  }

  const types = [
    'ToDo',
    'Doing',
    'Done'
  ];

  useEffect(() => {
    (async () => {
        const data = await getCards();

        if(data.request && data.request.status === 404) {
          setCards([]);
          notify('Requisição falhou, tente novamente...', 'error');
        } else if (data.request && data.request.status === 401) {
          setCards([]);
          notify('Token inválido, tente novamente...', 'error');
        } else {
          setCards(data.data);
        }
    })();
  }, []);

  return <KanbanContainer>
    <Modal createCard={setNewCard('ToDo')} onCloseModal={setActiveModal} active={activeModal} />

    <Header>
      <section>
        <div>
          <h1>Kanban</h1>
        </div>

        <div>
          <span>{cards.length}</span>
          <p>TOTAL<br/>CARDS</p>
        </div>
      </section>

      <button type="button" onClick={() => setActiveModal(true)}>
        <span>+</span>
        <p>CREATE<br/>CARD</p>
      </button>
    </Header>

    <KanbanList>
      {types.map(type => (
        <Columns key={type} type={type}>
          {
            cards.filter(item => item.lista === type).map(item =>
              <Card key={item.id} title={item.titulo} description={item.conteudo} back={changeType('back', type, item.id, types)} next={changeType('next', type, item.id, types)} updateCard={setUpdateCard(item.id)} deleteCard={setDeleteCard(item.id)} />
            )
          }
        </Columns>
      ))}
    </KanbanList>
    
  </KanbanContainer>
}

export default Kanban;