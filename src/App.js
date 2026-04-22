
import './App.css';
import { useState } from "react";

const App = () => {

  const [counter, setCounter] = useState(10);

  const increase =() =>{
setCounter(counter +1);
  };
  
  return (
    < >
      <h2>Welcome to React World</h2>
      <div>{counter}</div>
      <button onClick={increase}>+</button>
      <button onClick={()=> setCounter(counter -1)}>-</button>
    </>
  );
};
export default App;
