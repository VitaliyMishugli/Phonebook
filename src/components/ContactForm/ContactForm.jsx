import { nanoid } from 'nanoid';
import * as yup from 'yup';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import contactsOperations from "redux/contacts/contacts-operations";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { InputAndLabelContainer, InputsContainer, ErrorText } from './ContactForm.styled';
import { Alert, AlertTitle, Button, Paper} from '@mui/material';

const schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.string().required(),
});

const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => <ErrorText>{message}</ErrorText>}
    />
  )
}

export const ContactForm = () => {
  const inputNameId = nanoid();
  const inputNumberId = nanoid();
  const dispatch = useDispatch();
  const storeContacts = useSelector(state => state.contacts.items);
  const [isAddedName, setIsAddedName] = useState(false);
  const [contactName, setContactName] = useState('');

  const initialValues = {
    name: '',
    number: ''
  }

  const handleSubmit = (values, { resetForm }) => {
    const newContact = { ...values, id: nanoid() };
    setContactName(newContact.name);
    if (storeContacts.find(contact => contact.name.toLowerCase() === newContact.name.toLowerCase())) {
      setIsAddedName(true);
    }
    else {
      dispatch(contactsOperations.createContact(newContact));
    }
    resetForm();
  }
  if (isAddedName) {
    return (
      <Alert severity="warning" sx={{ width: '500px', margin:'20px auto'}}>
        <AlertTitle >Warning</AlertTitle>
        {contactName} is already in contacts
        <Button style={{ marginLeft: '10px' }} variant="contained" onClick={() => { setIsAddedName(false) }}>Add another name</Button>
      </Alert>)
  }

  return (
    <Paper sx={{
      padding: '10px', width: '500px', margin: 'auto', backgroundColor: 'secondary.main', display: 'flex',
      flexDirection: 'column',
      alignItems: 'stretch',
      gap: '5px'
    }}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        <Form>
          <InputsContainer>
            <InputAndLabelContainer>
              <label htmlFor={inputNameId}>Name</label>
              <Field
                placeholder='Enter new contact name'
                style={{
                  width: '100%',
                  padding: '10px',
                  margin: '10px 0',
                  border: '1px solid grey',
                  borderRadius: '6px',
                  backgroundColor: '#ebe2dd',
                }}                
                id={inputNameId}
                autoComplete="off"
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              />
              <FormError name='name' />
            </InputAndLabelContainer>

            <InputAndLabelContainer>
              <label htmlFor={inputNumberId}>Number</label>
              <Field
                placeholder='Enter new contact number'
                style={{
                  width: '100%',
                  padding: '10px',
                  margin: '10px 0',
                  border: '1px solid grey',
                  borderRadius: '6px',
                  backgroundColor: '#ebe2dd',
                }}
                id={inputNumberId}
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              />
              <FormError name='number' />
            </InputAndLabelContainer>
          </InputsContainer>
          <Button style={{ width: '100%', padding: '10px' }} variant="contained" type='submit'>Add contact</Button>
        </Form>
      </Formik>
    </Paper>)

}