import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';


export const HeaderElement = styled.div`
 display: flex;
  justify-content: center;
`;


export const NavItem = styled(NavLink)`
  margin: 10px 10px;
  padding: 3px;
  border-radius: 4px;
  text-decoration: none;
  color: blue;
  position: relative;
  // &.active{
  //   background-color: tomato;
  //   color: white
  // }
  // :hover:not(.active),
  // :focus-visible:not(.active){
  //   color: tomato
  // }
`;