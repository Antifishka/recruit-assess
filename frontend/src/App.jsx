import { lazy, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useAuth } from "./hooks";
import authOperations from './redux/auth/auth-operations';
import { Loader } from './components/Loader';
import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { RestrictedRoute } from './components/RestrictedRoute';

const Home = lazy(() => import('./pages/Home'));
const RegisterPage = lazy(() => import('./pages/Register'));
const LoginPage = lazy(() => import('./pages/Login'));
const Tests = lazy(() => import('./pages/Tests'));

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(authOperations.refreshUser());
  }, [dispatch]);

  return isRefreshing
    ? <Loader />
    : <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route path="/register"
            element={<RestrictedRoute redirectTo="/tests" component={<RegisterPage />} />}
          />

          <Route path="/login"
            element={<RestrictedRoute redirectTo="/tests" component={<LoginPage />} />}
          />

          <Route path="/tests" element={<Tests />} />

          <Route path="*" element={<Home />} />
        </Route>  
      </Routes> 
};
 
export default App;