import { useDispatch } from 'react-redux';
import contactsOperations from "redux/contacts/contacts-operations";
import {Typography, Button} from '@mui/material';

export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    <>
      <Typography>It's Typography</Typography>
      <span style={{ marginRight: '10px' }}>{name} : {number}</span>
      <Button variant="contained" onClick={() => dispatch(contactsOperations.deleteContact(id))}>Delete</Button>
      {/* <Button variant="contained">Hello World</Button> */}
    </>)
}
