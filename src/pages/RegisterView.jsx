import { Helmet } from 'react-helmet';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { Paper } from '@mui/material';

const RegisterView = ()=> {
  return (
    <div>
      {/* <h2>Registration page</h2>
      <Helmet>
        <title>Registration</title>
      </Helmet> */}
      <Paper sx={{
        padding: '20px',
        width: '500px',
        margin: '20px auto',
        backgroundColor: 'secondary.main',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <RegisterForm />
        </Paper>
    </div>
  );
}

export default RegisterView;