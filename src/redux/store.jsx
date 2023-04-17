import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import authSlice from './auth/auth-slice';
import filterSlice from './filter/filter-slice';
import contactsSlice from './contacts/contacts-slice';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

// Налаштування для persist для auth
const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token']
}

const rootReducer = combineReducers({
  // Передаємо редюсери із слайсів для конфігурації стора
  contacts: contactsSlice.reducer,
  filter: filterSlice.reducer, 
  auth:  persistReducer(authPersistConfig, authSlice.reducer)
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store);
