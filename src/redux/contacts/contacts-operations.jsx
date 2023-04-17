import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

// =================================================
// // Используем функцию createAsyncThunk для объявления асинхронных генераторов экшенов и выполнения HTTP-запросов
// const getContacts = createAsyncThunk(
//   // Первый параметр -- тип экшена. createAsyncThunk автоматически сгенерирует три экшена с окончанием (.../pending, .../fulfilled, .../rejected)
//   'contacts/getContacts',
//   // Второй параметр -- payload creator (то, что будет возвращать payload)
//   async () => {
//     try {
//       const  contacts  = await axios.get('/contacts');
//       return contacts;
//       // То, что возвращаем из payload creator-a, будет payload при success
//     } catch (error) {
//       return error;
//     }
//   }
// )
// ====================================

const getContacts = createAsyncThunk('contacts/getContacts',
  async (_, thunkAPI) => {
    try {
      const {data} = await axios.get('/contacts');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
)

const createContact = createAsyncThunk(
  'contacts/createContact',
  async (contact, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', contact);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      await axios.delete(`/contacts/${id}`);
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }   
  }
)

const contactsOperations = {
  getContacts,
  createContact,
  deleteContact
}

export default contactsOperations;