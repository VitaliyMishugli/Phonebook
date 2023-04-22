import { NavItem, HeaderElement } from './Navigation.styled';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/auth-selectors';
import { Button } from "@mui/material";

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <>
      <HeaderElement>

        <NavItem to='home'>
          <Button variant="contained">
            Home
          </Button>
        </NavItem>


        {isLoggedIn &&
          (<NavItem to='contacts'>
            <Button variant="contained">
              Contacts
            </Button>
          </NavItem>)
        }



        {/* <NavItem to='home'>
          Home
        </NavItem>
        {isLoggedIn && 
         ( <NavItem to='contacts'>
            Contacts
          </NavItem>)
        } */}
      </HeaderElement>
    </>
  )
}