import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {

  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  }

  return (
    <div className="App">
      <div>
        <h1>Counter App</h1>
      </div>
      <div>
        <p>{count}</p>
        <button onClick={increaseCount}>
          Count
        </button>
      </div>
      <div>
        <button onClick={() => {setCount(0)}}>
          Reset count
        </button>
      </div>
    </div>
  );
}

export default App;
