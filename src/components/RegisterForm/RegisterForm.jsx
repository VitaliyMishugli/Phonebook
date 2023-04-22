import { useDispatch } from 'react-redux';
import authOperations  from 'redux/auth/auth-operations';
import css from './RegisterForm.module.css';
import { Button, TextField } from '@mui/material';

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
        {/* <label className={css.label}>
          Username */}
        <TextField
          helperText="Enter your name"
          id="demo-helper-text-misaligned"
          label="Name"
          name="name" 
           type="text" />
        {/* </label> */}


        {/* <label className={css.label}>
          Email */}
        <TextField
          helperText="Enter your email"
          id="demo-helper-text-misaligned"
          label="Email"
          name="email"
          type="email" />
        {/* </label> */}


        {/* <label className={css.label}>
          Password */}
        <TextField
          helperText="Enter your password"
          id="demo-helper-text-misaligned"
          label="Password"
          type="password"
          name="password" />
        {/* </label> */}
        <Button variant="contained" type="submit">Register</Button>
      </form>
    </>
   
  );
};
