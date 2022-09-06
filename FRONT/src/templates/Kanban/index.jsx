import { useState, useEffect } from 'react';
import { Header, KanbanContainer, KanbanList } from './styles';
import services from '../../services/index';
import Columns from '../../components/organisms/Columns'
import Card from '../../components/molecules/Card'
import Modal from '../../components/atoms/Modal'

const { getCards, createCard, updateCard, deleteCard } = services();

function Kanban() {
  const [cards, setCards] = useState([]);
  const [activeModal, setActiveModal] = useState(false)

  const setNewCard = lista => async (titulo, conteudo) => {
    const newCard = { lista, titulo, conteudo };
    const savedCard = await createCard(newCard);
    setCards([savedCard, ...cards]);
  }

  const setUpdateCard = id => async (titulo, conteudo) => {
    const card = cards.find(item => item.id === id);
    if (!card) return;
    const newCard = { ...card, titulo, conteudo };
    const savedCard = await updateCard(newCard);
    const newCards = cards.reduce((res, item) => item.id === savedCard.id ? [...res, savedCard] : [...res, item], []);
    setCards(newCards);
  }

  const setDeleteCard = id => async () => {
    const card = cards.find(item => item.id === id);
    if (!card) return;
    const remainingCards = await deleteCard(id);
    setCards(remainingCards);
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
      const newCards = cards.reduce((res, item) => item.id === savedCard.id ? [...res, savedCard] : [...res, item], []);
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
        setCards(data);
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