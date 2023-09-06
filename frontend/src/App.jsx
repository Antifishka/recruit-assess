import { Routes, Route } from "react-router-dom";
import { FontStyles } from './globalStyles/fontStyles';
import { GlobalStyle } from './globalStyles/globalStyle';
import { Layout } from "./components/Layout/Layout";

const App = () => {
  return (  
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<div>Wellcome!</div>} />
          <Route path="/test" element={<div>Test</div>} />
          <Route path="*" element={<div>Wellcome!</div>} />
        </Route>  
      </Routes>

      <FontStyles />
      <GlobalStyle />
    </>  
  );
};
 
export default App;