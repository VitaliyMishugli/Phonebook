import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import contactsOperations from "redux/contacts/contacts-operations";
import { ContactItem } from '../ContactItem/ContactItem';

export const ContactList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.getContacts());
  }, [dispatch])

  const storeFilter = useSelector(state => state.filter);
  const storeContacts = useSelector(state => state.contacts.items);

  const visibleContacts = storeContacts.filter(contact => contact.name.toLowerCase().includes(storeFilter.toLowerCase()));
  
  return (
    <div>
    {
      storeContacts.length > 0 && (
        <ul style={{ listStyle: 'none' }}>
          {
            visibleContacts.map(({ name, id, number }) => (
              <li key={id} style={{ marginBottom: '10px' }}>
                <ContactItem name={name} id={id} number={number} />
              </li>))}
        </ul>
    )}
    </div>
  )
}

