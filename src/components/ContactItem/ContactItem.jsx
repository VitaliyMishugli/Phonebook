import { useDispatch } from 'react-redux';
import contactsOperations from "redux/contacts/contacts-operations";
import Button from '@mui/material/Button';

export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    <>
      <span style={{ marginRight: '10px' }}>{name} : {number}</span>
      <Button variant="contained" onClick={() => dispatch(contactsOperations.deleteContact(id))}>Delete</Button>
      {/* <Button variant="contained">Hello World</Button> */}
    </>)
}
