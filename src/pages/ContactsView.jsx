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
        backgroundColor: 'secondary.main', 
        textAlign: 'center'
      }}>       
        <Typography variant='h3'>My contacts book</Typography>
      </Paper>
      <ContactForm />
      <Paper sx={{
        padding: '10px',
        width: '100%',
        margin: '20px auto',
        backgroundColor: 'secondary.main',
        textAlign: 'center'
      }}>
        <Typography variant='h3'> Contact list</Typography>
       
      </Paper>
      <Filter />
      <ContactList />
    </div>
  )
}

export default ContactsView;