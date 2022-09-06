import { useState, useEffect } from 'react';
import { Header, KanbanContainer, KanbanList } from './styles';
import services from '../../services/index';
import Columns from '../../components/organisms/Columns'
import Card from '../../components/molecules/Card'

const { getCards, createCard, updateCard, deleteCard } = services();

export const Kanban = () => {
  const [cards, setCards] = useState([]);

  const setNewCard = list => async (title, description) => {
    const newCard = { list, title, description };
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
      console.log(newCards)
      setCards(newCards);
    }
  }

  const types = [
    'Novo',
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
    <Header>
      <section>
        <div>
          <h1>Kanban</h1>
        </div>

        <div>
          <button>{cards.length}</button>
          <p>TOTAL<br/>CARDS</p>
        </div>
      </section>

      <div>
        <button>+</button>
        <p>CREATE<br/>CARD</p>
      </div>
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