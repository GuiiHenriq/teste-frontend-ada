import styled from 'styled-components';

export const KanbanContainer = styled.div`
  h1 {
    text-align: center;
    padding: 20px 0 10px 0;
    border-bottom: 1px solid ${({theme}) => theme.colors.white};
  }
`

export const KanbanList = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 20px;
  margin-top: 20px;
  padding: 0 20px;

  @media screen and (min-width: 1024px) {
		grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 15px;
    grid-row-gap: 0px;
    padding: 0 10px;
	}
`