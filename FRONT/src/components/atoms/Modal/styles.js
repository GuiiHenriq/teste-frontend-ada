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
  color: ${({theme}) => theme.colors.black};

  &.active {
    visibility: visible;
    opacity: 1;
    pointer-events: auto;
  }
  
  & > div {
    width: 80%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 2em;
    background: ${({theme}) => theme.colors.white};
    border-left: 4px solid ${({theme}) => theme.colors.yellow};
    box-shadow: 0 0 5px rgba(0,0,0,.2);

    @media screen and (min-width: 1024px) {
      width: 400px;
	  }
  }
`;