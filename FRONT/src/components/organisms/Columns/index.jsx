import PropTypes from 'prop-types';
import { ColumnContainer, ColumnName, ColumnList } from './styles';

function Columns({ type, children }) {
  return <ColumnContainer>
    <ColumnName>
      {type}
    </ColumnName>
    
    <ColumnList>
      {children}
    </ColumnList>
</ColumnContainer>
}

Columns.propTypes = {
  type: PropTypes.string.isRequired,
}

export default Columns;