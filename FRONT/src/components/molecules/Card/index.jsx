import { useState } from 'react';
import PropTypes from 'prop-types';
import { marked } from 'marked';
import DOMPurify from 'dompurify';
import { FaEdit } from "react-icons/fa";
import { AiFillDelete, AiOutlineCheckCircle } from "react-icons/ai";
import { MdOutlineCancel } from "react-icons/md";
import { IoChevronBackCircleOutline, IoChevronForwardCircleOutline } from "react-icons/io5";
import { CardContainer, CardTitle, CardDescription, CardButtons, CardInput, CardEditContent, CardTextArea } from './styles';

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
            <button onClick={() => setMode(EDIT)}><FaEdit size={20} /></button>
            <button onClick={deleteCard}><AiFillDelete size={20} /></button>
          </div>

          <div>
            <button onClick={back}><IoChevronBackCircleOutline size={20} /></button>
            <button onClick={next}><IoChevronForwardCircleOutline size={20} /></button>
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
        <CardInput type='text' onChange={evt => setEditTitle(evt.target.value)} value={editTitle} />
        <CardEditContent>
          <CardTextArea onChange={evt => setEditDescription(evt.target.value)} value={editDescription}></CardTextArea>
        </CardEditContent>
        <CardButtons>
          <button onClick={cancelEdit}><MdOutlineCancel size={20} /></button>
          <button onClick={saveEdit}><AiOutlineCheckCircle size={20} /></button>
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