import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [item, setItem] = useState('');
  const [list, setList] = useState([]);

  const handleInputChange = (e) => {
    setItem(e.target.value);
  }

  const handleAdd = () => {
    setList(
      [...list, item]
    );
    setItem('');
  }

  const handleDelete = (index) => {
    setList(
      list.filter((_, i) => i !== index)
    )
  }

  return (
    <div className="App">
      <h1>Todo App</h1>
      <input type='text' value={item} onChange={handleInputChange} placeholder='Enter the item here'/>
      <button onClick={handleAdd}>Add item</button>
      <div>
        <ul>
          {list.map((listItem, index) => (
            <li key={index}>
              {listItem}
              <button onClick={() => handleDelete(index)}>❌</button>
            </li> 
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
