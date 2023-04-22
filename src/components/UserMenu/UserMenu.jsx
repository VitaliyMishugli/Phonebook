import { useDispatch } from 'react-redux';
import { BsPersonCircle } from 'react-icons/bs';
import { NavItem, HeaderElement } from './UserMenu.styled';
import { useAuth } from 'hooks';
import {  Button } from '@mui/material';
import authOperations from 'redux/auth/auth-operations';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const { logout } = authOperations;

  return (
    <>
      <HeaderElement>  
        <BsPersonCircle size="20px" style={{ marginRight: '2px', color: 'blue' }} />
        <NavItem>
         
          Welcome, {user.name}
        </NavItem>
        <NavItem>
          <Button variant="contained" onClick={() => {
            dispatch(logout())
          }}>Logout</Button>
        </NavItem>
      </HeaderElement>
    </>
  )
}