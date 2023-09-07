import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { RestrictedRoute } from './components/RestrictedRoute';

const Home = lazy(() => import('./pages/Home'));
const RegisterPage = lazy(() => import('./pages/Register'));
const LoginPage = lazy(() => import('./pages/Login'));
const Tests = lazy(() => import('./pages/Tests'));

const App = () => {
  return (  
    <>
      <Routes>
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
    </>  
  );
};
 
export default App;