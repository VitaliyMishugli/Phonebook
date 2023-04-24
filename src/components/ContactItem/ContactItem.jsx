import { useDispatch } from 'react-redux';
import { ContactContainer } from './ContactItem.styled';
import contactsOperations from "redux/contacts/contacts-operations";
import {Button, Paper, Typography} from '@mui/material';

export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    <>
      <Paper sx={{ minWidth: '200px', width: '100%', padding: '10px', backgroundColor: 'secondary.main'}}>
        <ContactContainer>
          <Typography variant='h6' style={{ marginRight: '10px' }}>{name} : {number}</Typography>
          <Button variant="contained" onClick={() => dispatch(contactsOperations.deleteContact(id))}>Delete</Button>
        </ContactContainer>
      </Paper>
      
    </>)
}
