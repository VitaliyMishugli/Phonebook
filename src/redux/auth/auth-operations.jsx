import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  }
}

// Реєстрація нового юзера
const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const { data } = await axios.post('/users/signup', credentials);
    token.set(data.token);
    return data;    
  } catch (error) {
    return error;
  }
})

// Логін юзера
const login = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
  try {
    const { data } = await axios.post('/users/login', credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    alert("There isn't such user. Register please!");
    return thunkAPI.rejectWithValue(error.message); 
  }
})

// Логаут юзера
const logout = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.post('/users/logout');
    token.unset();
  } catch (error) {
    return error;
  }
})

// Логін юзера
const refreshCurrentUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
  const persistedToken = thunkAPI.getState().auth.token;
  if (persistedToken === null) {
    return thunkAPI.rejectWithValue(); 
  };
  token.set(persistedToken);
  try {    
    const { data } = await axios.get('/users/current');
    return data;
  } catch (error) {
    return error;
  }
})

const authOperations = {
  register,
  login,
  logout,
  refreshCurrentUser
}


export default authOperations;