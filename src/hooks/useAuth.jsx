import { useSelector } from "react-redux";

import { selectIsLoggedIn, selectUser, selectIsRefreshed } from 'redux/auth/auth-selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshed = useSelector(selectIsRefreshed);
  const user = useSelector(selectUser);

  return {
    isLoggedIn,
    isRefreshed,
    user,
  }
}