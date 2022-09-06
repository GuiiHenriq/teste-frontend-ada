import styled from 'styled-components';

export const ModalContainer = styled.section`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.20);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
  visibility: hidden;
  opacity: 0;
  pointer-events: none;
  transition: all 0.3s;
  color: black;

  &.active {
    visibility: visible;
    opacity: 1;
    pointer-events: auto;
  }
  
  & > div {
    width: 400px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 2em;
    background: white;
    border-left: 4px solid ${({theme}) => theme.colors.doing};
    box-shadow: 0 0 5px rgba(0,0,0,.2);
  }
`;