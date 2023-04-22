import { Navigation } from 'components/Navigation/Navigation';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { HeaderBar } from './AppBar.styled';
import { useAuth } from 'hooks';
import { Paper } from '@mui/material'; 

export const AppBar = () => {
  const { isLoggedIn } = useAuth();
  return (   
    <Paper sx={{ backgroundColor: 'secondary.main'}}>      
      <HeaderBar >
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </HeaderBar>        
    </Paper>
  );
};
