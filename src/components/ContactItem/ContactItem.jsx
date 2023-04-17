import { useDispatch } from 'react-redux';
import contactsOperations from "redux/contacts/contacts-operations";

export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    <>
      <span style={{ marginRight: '10px' }}>{name} : {number}</span>
      <button onClick={() => dispatch(contactsOperations.deleteContact(id))}>Delete</button>
    </>)
}
