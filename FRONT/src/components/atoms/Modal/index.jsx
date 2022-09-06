import { useState, useEffect } from 'react';
import { ModalContainer } from './styles';
import { CardEditTitle, CardEditDescription, CardTextArea, CardButtons, CardButtonCancel, CardButtonSave } from '../../molecules/Card/styles';
import { AiOutlineCheckCircle } from "react-icons/ai";
import { MdOutlineCancel } from "react-icons/md";

const Modal = ({ createCard, onCloseModal, active }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleClose = () => {
    onCloseModal(false);
 }

  const create = () => {
    createCard(title, description);
    setTitle('');
    setDescription('');
    handleClose();
  };

  return (
    <ModalContainer className={active ? 'active' : ''}>
      <div>
        <CardEditTitle type='text' onChange={evt => setTitle(evt.target.value)} value={title} placeholder="Título" />
        <CardEditDescription>
          <CardTextArea onChange={evt => setDescription(evt.target.value)} value={description} placeholder="Descrição"></CardTextArea>
        </CardEditDescription>
        <CardButtons>
          <CardButtonCancel onClick={handleClose}><MdOutlineCancel size={24} /></CardButtonCancel>
          <CardButtonSave onClick={create}><AiOutlineCheckCircle size={24} /></CardButtonSave>
        </CardButtons>
      </div>
    </ModalContainer>
  );
}

export default Modal;