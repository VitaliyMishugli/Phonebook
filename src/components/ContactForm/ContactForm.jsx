import { nanoid } from 'nanoid';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import contactsOperations from "redux/contacts/contacts-operations";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { FormContainer, InputAndLabelContainer, InputsContainer, ErrorText } from './ContactForm.styled';

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

  const initialValues = {
    name: '',
    number: ''
  }

  const handleSubmit = (values, { resetForm }) => {
    const newContact = { ...values, id: nanoid() }
    if (storeContacts.find(contact => contact.name.toLowerCase() === newContact.name.toLowerCase())) {
      alert(`${newContact.name} is already in contacts`)
    }
    else {
      dispatch(contactsOperations.createContact(newContact));
    }
    resetForm();
  }

  return (
    <FormContainer >
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
                id={inputNumberId}
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              />
              <FormError name='number' />
            </InputAndLabelContainer>
          </InputsContainer>
          <button type='submit'>Add contact</button>
        </Form>
      </Formik>
    </FormContainer>
  )
}