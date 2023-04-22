import { useDispatch } from 'react-redux';
import  authOperations  from 'redux/auth/auth-operations';
import css from './LoginForm.module.css';
import { Button,TextField  } from '@mui/material';

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
      
      {/* <TextField
        helperText="Please enter contact name"
        id="demo-helper-text-misaligned"
        label="Name"
        type="text"
        value={storeFilter}
        onChange={(e) => dispatch(changeFilter(e.currentTarget.value))} /> */}


      <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
        {/* <label className={css.label}> */}
        {/* Email */}
        
          <TextField
            helperText="Enter your email"
            id="demo-helper-text-misaligned"
            label="Email"         
            type="email"
            name="email" />
        {/* </label> */}


        {/* <label className={css.label}> */}
        {/* Password */}
        <TextField
          helperText="Enter your password"
          id="demo-helper-text-misaligned"
          label="Password"
          type="password"
          name="password" />
        {/* </label> */}
        <Button variant="contained" type="submit">Log In</Button>
      </form>
    </>

  );
}
