import { useDispatch } from 'react-redux';
import { ContactContainer } from './ContactItem.styled';
import contactsOperations from "redux/contacts/contacts-operations";
import {Button, Paper} from '@mui/material';

export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    <>
      <Paper sx={{ minWidth: '200px', width: '100%', padding: '10px', backgroundColor: 'secondary.main'}}>
        <ContactContainer>
          <span style={{ marginRight: '10px' }}>{name} : {number}</span>
          <Button variant="contained" onClick={() => dispatch(contactsOperations.deleteContact(id))}>Delete</Button>
        </ContactContainer>
        
      </Paper>
      {/* <Typography variant='h1'>It's Typography</Typography> */}
      
    </>)
}
