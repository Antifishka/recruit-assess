import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { FontStyles } from './globalStyles/fontStyles';
import { GlobalStyle } from './globalStyles/globalStyles';
import { Layout } from "./components/Layout/Layout";

const Home = lazy(() => import('./pages/Home/Home'));

const App = () => {
  return (  
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/tests" element={<div>Test</div>} />
          <Route path="*" element={<Home />} />
        </Route>  
      </Routes>

      <FontStyles />
      <GlobalStyle />
    </>  
  );
};
 
export default App;