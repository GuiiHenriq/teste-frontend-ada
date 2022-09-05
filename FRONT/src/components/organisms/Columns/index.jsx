import { ColumnContainer, ColumnName, ColumnList } from './styles';

const Columns = ({ type, children }) => {
  return <ColumnContainer>
    <ColumnName>
      {type}
    </ColumnName>
    
    <ColumnList>
      {children}
    </ColumnList>
</ColumnContainer>
}

export default Columns;