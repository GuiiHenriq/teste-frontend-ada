import styled from 'styled-components';

export const CardContainer = styled.li`
    padding: 10px;
    margin: 5px;
    background: white;
    box-shadow: 0 0 5px rgba(0,0,0,.2);
    color: black;
    border-left: 4px solid ${({theme}) => theme.colors.doing};
`;

export const CardTitle = styled.h4`
`;


export const CardDescription = styled.div`
    margin-top: 10px;
    margin-bottom: 25px;
`;

export const CardButtons = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 10px;

    button {
      cursor: pointer;
    }
`;

export const CardInput = styled.input`
  width: 100%;
  border: 2px solid ${({theme}) => theme.colors.lightgray};
  border-radius: 4px;
  margin: 8px 0;
  outline: none;
  padding: 8px;
  box-sizing: border-box;
  transition: .3s;

  &:focus{
    border-color: ${({theme}) => theme.colors.focus};
    box-shadow:0 0 8px 0 ${({theme}) => theme.colors.focus};
  }
`;

export const CardEditContent = styled.div`
    width: 100%;
    display: flex;
`;

export const CardTextArea = styled.textarea`
  width: 100%;
  border: 2px solid ${({theme}) => theme.colors.lightgray};
  border-radius: 4px;
  outline: none;
  padding: 8px;
  box-sizing: border-box;
  transition: .3s;
  min-height: 100px;

  &:focus{
    border-color: ${({theme}) => theme.colors.focus};
    box-shadow:0 0 8px 0 ${({theme}) => theme.colors.focus};
  }
`;