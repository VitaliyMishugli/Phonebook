import { useDispatch } from 'react-redux';
import authOperations  from 'redux/auth/auth-operations';
import css from './RegisterForm.module.css';
import { Button} from '@mui/material';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      authOperations.register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <>
      <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
        <input
          name="name"
          type="text"
          placeholder='Enter name'
          style={{
            width: '100%',
            padding: '10px',
            margin: '10px 0',
            border: '1px solid grey',
            borderRadius: '6px',
            backgroundColor: '#ebe2dd',
          }}
        />

        <input
          type="email"
          name="email"
          placeholder='Enter email'
          style={{
            width: '100%',
            padding: '10px',
            margin: '10px 0',
            border: '1px solid grey',
            borderRadius: '6px',
            backgroundColor: '#ebe2dd',
          }}
        />

        <input
          type="password"
          name="password"
          placeholder='Enter password'
          style={{
            width: '100%',
            padding: '10px',
            margin: '10px 0',
            border: '1px solid grey',
            borderRadius: '6px',
            backgroundColor: '#ebe2dd',
          }}
        />
        <Button variant="contained" type="submit">Register</Button>
      </form>
    </>
   
  );
};
