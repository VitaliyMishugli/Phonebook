import { NavItem, HeaderElement } from './Navigation.styled';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/auth-selectors';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <>
      <HeaderElement >
        <NavItem to='home'>
          Home
        </NavItem>
        {isLoggedIn && 
         ( <NavItem to='contacts'>
            Contacts
          </NavItem>)
        }
      </HeaderElement>
    </>   
  )
}