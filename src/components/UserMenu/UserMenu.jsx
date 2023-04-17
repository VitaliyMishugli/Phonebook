import { useDispatch } from 'react-redux';
import { BsPersonCircle } from 'react-icons/bs';
import { NavItem, HeaderElement } from './UserMenu.styled';
import { useAuth } from 'hooks';
import authOperations from 'redux/auth/auth-operations';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const { logout } = authOperations;

  return (
    <>
      <HeaderElement>  
        <BsPersonCircle size="20px" style={{ position: 'relative', top: '15px', marginRight: '2px', color: 'blue' }} />
        <NavItem>
          Welcome, {user.name}
        </NavItem>
        <NavItem>
          <button onClick={() => {
            console.log('logout works');
            dispatch(logout())
          }}>Logout</button>
        </NavItem>
      </HeaderElement>
    </>
  )
}