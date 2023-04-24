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
          className={css.input}
        />

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
        <Button variant="contained" type="submit">Register</Button>
      </form>
    </>
   
  );
};
