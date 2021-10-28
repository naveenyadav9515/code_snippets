import './App.css';
import API from './helpers/apicalls';
import { useState, useEffect } from 'react';

function App() {
  const [error, setError] = useState(null);
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then(res => res.json())
      .then(
        (result) => {
          setItems(result);
        },
        (error) => {
          setError(error);
        }
      )
  }, [])
  if (error) {
return <div>{error.message}</div>
  } else {
    return (
      <div>
        <ul>
          {
            items.map(item => {
              return (
                <li
                  key={item.id}
                >{item.name}</li>
              )
            })
          }
        </ul>
      </div>
    );
  }
}


export default App;
