import { KanbanContainer, KanbanList } from './styles';
import Columns from '../../components/organisms/Columns'

export const Kanban = () => {
  const types = [
    'Novo',
    'To-do',
    'Doing',
    'Done'
  ];

  return <KanbanContainer>
    <h1>Kanban</h1>

    <KanbanList>
      {types.map(type => (
        <Columns key={type} type={type} />
      ))}
    </KanbanList>
    
  </KanbanContainer>
}