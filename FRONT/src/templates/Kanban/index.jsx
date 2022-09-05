import { useState, useEffect } from 'react';
import { KanbanContainer, KanbanList } from './styles';
import services from '../../services/index';
import Columns from '../../components/organisms/Columns'

const { getCards } = services();

export const Kanban = () => {
  const [cards, setCards] = useState([]);

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
        console.log(data)
    })();
  }, []);

  return <KanbanContainer>
    <h1>Kanban</h1>

    <KanbanList>
      {types.map(type => (
        <Columns key={type} type={type}>
          {
            cards.filter(item => item.lista === type).map(item =>
              <div key={item.id}>
                <p>{item.titulo}</p>
              </div>  
            )
          }
        </Columns>
      ))}
    </KanbanList>
    
  </KanbanContainer>
}