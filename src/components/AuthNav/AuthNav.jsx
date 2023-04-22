import { NavItem, HeaderElement } from './AuthNav.styled';
import { Button } from '@mui/material';

const navItems = [
  { href: 'registration', text: 'Registration' },
  { href: 'login', text: 'Login' },
];

export const AuthNav = () => {
  return (
    <>
      <HeaderElement>
      {
          navItems.map(({ href, text }) => (
           
            <NavItem key={href} to={href}>
              <Button variant="contained">
                {text}
              </Button>
              </NavItem>
             
          
          
        ))
        }
        </HeaderElement >
    </>
  )
}