import styled from 'styled-components';

export const ColumnContainer = styled.div`
  background: rgba(247 247 247 / 0.5);
  border-radius: 5px;
  box-shadow: rgb(0 0 0 / 16%) 0px 2px 6px, rgb(0 0 0 / 25%) 0px 2px 6px;
`;

export const ColumnList = styled.ul`
  padding: 0;
  margin: 0.5em;
  height: calc(100% - 3.5em);
  box-sizing: border-box;
  padding-bottom: 0.6em;
  margin-bottom: 0;
  display: flex;
  flex-direction: column;
`;

export const ColumnName = styled.h3`
  background: ${({theme}) => theme.colors.doing};
  border-bottom: 2px solid rgba(0,0,0,0.1);
  padding: 15px 10px;
`;