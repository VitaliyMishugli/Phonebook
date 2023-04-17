import { useSelector } from "react-redux";
import {  Navigate } from 'react-router-dom';
import { selectIsLoggedIn, selectIsRefreshed } from 'redux/auth/auth-selectors';

// - Если маршрут приватный и пользователь залогинен, рендерит компонент
// - В противном случае рендерит Redirect на redirectTo

export  const PrivateRoute = ({ component: Component, redirectTo = '/login' }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshed = useSelector(selectIsRefreshed);
  const shouldRedirect = !isLoggedIn && !isRefreshed;
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component ;
};