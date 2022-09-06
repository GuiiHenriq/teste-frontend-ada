import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  background: ${({theme}) => theme.colors.white};
  color: ${({theme}) => theme.colors.background};
  padding: 15px 10px;
  justify-content: space-between;

  section {
    display: flex;
    align-items: center;
  }

  div {
    display: flex;
    align-items: center;
    cursor: pointer;

    &:hover {
      button {
        background: ${({theme}) => theme.colors.background};
      }
    }
  }

  h1 {
    margin-right: 20px;
  }

  button {
    background: ${({theme}) => theme.colors.new};
    color: ${({theme}) => theme.colors.white};
    padding: 0;
    width: 40px;
    height: 40px;
    font-size: 20px;
    border-radius: 3px;
    margin-right: 8px;
    cursor: pointer;
  }
`

export const KanbanContainer = styled.div`
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