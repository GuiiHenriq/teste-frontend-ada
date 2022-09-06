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
      span {
        background: ${({theme}) => theme.colors.background};
      }
    }
  }

  button {
    display: flex;
    align-items: center;
    cursor: pointer;

    p {
      font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
      font-size: 16px;
      line-height: 16px;
      text-align: left;
    }

    &:hover {
      span {
        background: ${({theme}) => theme.colors.background};
      }
    }
  }

  h1 {
    margin-right: 20px;
  }

  span {
    background: ${({theme}) => theme.colors.red};
    color: ${({theme}) => theme.colors.white};
    padding: 0;
    width: 40px;
    height: 40px;
    font-size: 24px;
    border-radius: 3px;
    margin-right: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
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
		grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 15px;
    grid-row-gap: 0px;
    padding: 0 10px;
	}
`