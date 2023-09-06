import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";

const Home = lazy(() => import('./pages/Home/Home'));
const Tests = lazy(() => import('./pages/Tests'));

const App = () => {
  return (  
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/tests" element={<Tests />} />
          <Route path="*" element={<Home />} />
        </Route>  
      </Routes>
    </>  
  );
};
 
export default App;