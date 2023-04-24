import { ContactForm } from "components/ContactForm/ContactForm";
import { Filter } from "components/Filter/Filter";
import { ContactList } from "components/ContactList/ContactList";
import { Paper, Typography } from "@mui/material";

const ContactsView = () => {
  return (
    <div>
      <Paper sx={{
        padding: '10px',
        width: '100%',
        margin: '20px auto',
        backgroundColor: '#fff', 
        textAlign: 'center'
      }}>       
        <Typography variant='h3'>Add new contact</Typography>
      </Paper>
      <ContactForm />
      <Paper sx={{
        padding: '10px',
        width: '100%',
        margin: '20px auto',
        backgroundColor: '#fff',
        textAlign: 'center'
      }}>
        <Typography variant='h3'>Find contacts by name</Typography>
       
      </Paper>
      <Filter />
      <ContactList />
    </div>
  )
}

export default ContactsView;