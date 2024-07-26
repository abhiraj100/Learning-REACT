import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    // axios.get("http://localhost:3000/api/jokes")
    axios.get("/api/jokes")
         .then((response) => {
          setJokes(response.data)
         })
         .catch((error) => {
          console.log(error);
         })
  }, []);

  return (
    <>
      <h1>Abhiraj Yadav | Jai Shree Krishna</h1>
      <p>JOKES : {jokes.length}</p>

      {
        jokes.map((joke, index) => (
          <div key={joke.id}>
            <h3>{joke.title}</h3>
            <p>{joke.content}</p>
          </div>
        ))
      }
    </>
  )
}

export default App;
