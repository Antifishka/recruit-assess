import { useContext, createContext } from 'react';

const Context = createContext('apple');
const MyChild = () => {
  const fruit = useContext(Context);
  return <div>{fruit}</div>
}

function App() {
  return (
    <Context.Provider value={'orange'}>
      <MyChild />
    </Context.Provider>
  )
}

export default App
