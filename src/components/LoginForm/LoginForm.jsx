import { useDispatch } from 'react-redux';
import  authOperations  from 'redux/auth/auth-operations';
import css from './LoginForm.module.css';
import { Button } from '@mui/material';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const { login } = authOperations;

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      login({
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
          type="email"
          name="email"
          placeholder='Enter email'
          className={css.input}
        />

        <input
          type="password"
          name="password"
          placeholder='Enter password'
          className={css.input}
        />
        <Button variant="contained" type="submit">Log In</Button>
      </form>
    </>

  );
}
