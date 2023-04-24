import { LoginForm } from 'components/LoginForm/LoginForm';
import { Paper } from '@mui/material';

const LoginView =()=> {
  return (
    <div>
      <Paper sx={{
        padding: '20px',
        width: '500px',
        margin: '20px auto',
        backgroundColor: 'secondary.main',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <LoginForm />
      </Paper>
      
    </div>
  );
}

export default LoginView;