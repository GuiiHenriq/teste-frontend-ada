import { useState } from 'react';
import PropTypes from 'prop-types';
import { marked } from 'marked';
import DOMPurify from 'dompurify';
import { FaEdit } from "react-icons/fa";
import { AiFillDelete, AiOutlineCheckCircle } from "react-icons/ai";
import { MdOutlineCancel } from "react-icons/md";
import { IoChevronBackCircleOutline, IoChevronForwardCircleOutline } from "react-icons/io5";
import { CardContainer, CardTitle, CardDescription, CardButtons, CardEditTitle, CardEditDescription, CardTextArea, CardButtonEdit, CardButtonCancel, CardButtonBack, CardButtonNext, CardButtonSave } from './styles';

const markdownDescription = description => DOMPurify.sanitize(marked(description));
const SHOW = 'display';
const EDIT = 'edit';

export const Card = ({ title, description, updateCard, deleteCard, back, next }) => {
  const [editTitle, setEditTitle] = useState(title);
  const [editDescription, setEditDescription] = useState(description);
  const [mode, setMode] = useState(SHOW);

  const showCard = (title) => {
    return (
      <CardContainer>
        <CardTitle>{title}</CardTitle>
        <CardDescription dangerouslySetInnerHTML={{ __html: markdownDescription(description) }}></CardDescription>
        <CardButtons>
          <div>
            <CardButtonEdit onClick={() => setMode(EDIT)}><FaEdit size={24} /></CardButtonEdit>
            <CardButtonCancel onClick={deleteCard}><AiFillDelete size={24} /></CardButtonCancel>
          </div>

          <div>
            <CardButtonBack onClick={back}><IoChevronBackCircleOutline size={24} /></CardButtonBack>
            <CardButtonNext onClick={next}><IoChevronForwardCircleOutline size={24} /></CardButtonNext>
          </div>
        </CardButtons>
      </CardContainer>
    );
  };

  const showEditCard = (title, description) => {
    const saveEdit = () => {
      updateCard(editTitle, editDescription);
      setMode(SHOW);
    }

    const cancelEdit = () => {
      setEditDescription(description);
      setEditTitle(title);
      setMode(SHOW);
    }

    return (
      <CardContainer>
        <CardEditTitle type='text' onChange={evt => setEditTitle(evt.target.value)} value={editTitle} />
        <CardEditDescription>
          <CardTextArea onChange={evt => setEditDescription(evt.target.value)} value={editDescription}></CardTextArea>
        </CardEditDescription>
        <CardButtons>
          <CardButtonCancel onClick={cancelEdit}><MdOutlineCancel size={24} /></CardButtonCancel>
          <CardButtonSave onClick={saveEdit}><AiOutlineCheckCircle size={24} /></CardButtonSave>
        </CardButtons>
      </CardContainer >
    );
  };

  return (
      <>
          {mode === SHOW ? showCard(title, description) : showEditCard(title, description)}
      </>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  updateCard: PropTypes.func.isRequired,
  deleteCard: PropTypes.func.isRequired,
  back: PropTypes.func,
  next: PropTypes.func,
}

Card.defaultProps = {
  back: () => { },
  next: () => { },
}

export default Card;