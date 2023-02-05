import { lazy } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout';
import { fetchCurrentUser } from 'redux/auth/auth-operations';
import { PrivateRoute } from 'components/routes/PrivateRoute';
import { PublicRoute } from 'components/routes/PublicRoute';
import { selectFetchingCurrentUser } from 'redux/auth/auth-selectors';
import { ChakraProvider } from '@chakra-ui/react';

const HomePage = lazy(() => import('pages/HomePage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const ContactsPage = lazy(() => import('pages/ContactsPage'));

export const App = () => {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(selectFetchingCurrentUser);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      {!isFetchingCurrentUser && (
        <ChakraProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route
                index
                element={
                  <PublicRoute>
                    <HomePage />
                  </PublicRoute>
                }
              />
              <Route
                path="register"
                element={
                  <PublicRoute restricted>
                    <RegisterPage />
                  </PublicRoute>
                }
              />
              <Route
                path="login"
                element={
                  <PublicRoute restricted>
                    <LoginPage />
                  </PublicRoute>
                }
              />
              <Route
                path="contacts"
                element={
                  <PrivateRoute>
                    <ContactsPage />
                  </PrivateRoute>
                }
              />
              <Route path="*" element={<HomePage />} />
            </Route>
          </Routes>
        </ChakraProvider>
      )}
    </>
  );
};
