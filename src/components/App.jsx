import { useEffect, lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { PrivateRoute } from 'components/PrivateRoute';
import { Layout } from 'pages/Layout';
import authOperations from 'redux/auth/auth-operations';
import { selectIsRefreshing } from 'redux/auth/auth-selectors';
import { RestrictedRoute } from './RestrictedRoute';

const HomeView = lazy(() => import('../pages/HomeView.jsx'));
const RegisterView = lazy(() => import('../pages/RegisterView.jsx'));
const LoginView = lazy(() => import('../pages/LoginView.jsx'));
const ContactsView = lazy(() => import('../pages/ContactsView.jsx'));

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  console.log(isRefreshing)

  useEffect(() => {
    dispatch(authOperations.refreshCurrentUser())
  }, [dispatch])

  return (
    !isRefreshing && (
      <>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route path='home' element={<HomeView />} />
              <Route
                path='registration'
                element={<RestrictedRoute component={<RegisterView />} />}
              />
              <Route
                path='login'
                element={<RestrictedRoute component={<LoginView />} />}
              />
              <Route
                path="contacts"
                element={<PrivateRoute component={<ContactsView />} />
                }
              />
            </Route>
          </Routes>
        </Suspense>
      </>
    )
  );
}

