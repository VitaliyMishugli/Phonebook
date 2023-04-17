import contactsOperations from './contacts-operations';
import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null
  },
  extraReducers: {
    // Отримання контактів
    [contactsOperations.getContacts.pending](state) {
      state.isLoading = true;
    },
    [contactsOperations.getContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [contactsOperations.getContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    // Додавання
    [contactsOperations.createContact.pending](state) {
      state.isLoading = true;
    },
    [contactsOperations.createContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [contactsOperations.createContact.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    // Видалення
    [contactsOperations.deleteContact.pending](state) {
      state.isLoading = true;
    },
    [contactsOperations.deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const restContacts = state.items.filter(contact => contact.id !== action.payload);
      state.items = restContacts;
    },
    [contactsOperations.deleteContact.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    }
  }
})

export default contactsSlice;