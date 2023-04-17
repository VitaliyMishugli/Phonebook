import { NavItem, HeaderElement } from './AuthNav.styled';

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
          <NavItem to={href} key={href}>
            {text}
          </NavItem>
        ))
        }
        </HeaderElement >
    </>
  )
}