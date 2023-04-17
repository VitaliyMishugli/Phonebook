import { Navigation } from 'components/Navigation/Navigation';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { HeaderBar } from './AppBar.styled';
import { useAuth } from 'hooks';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <>
      <HeaderBar >
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </HeaderBar>        
    </>
  );
};
