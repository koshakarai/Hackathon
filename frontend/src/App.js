import { useState, useEffect} from 'react';
import axios from 'axios';

import './App.css';

function App() {

  const [team, setTeam] = useState([])

  useEffect(() => {
    axios({
      method: "GET",
      url: "http://127.0.0.1:8000/api/"
    }).then(response => setTeam(response.data))
  }, [])

  return (
    <div className="App">
      <p>Wellcome to Hackathon</p>
      <p>'Team prometheus'</p>
      
      {team.map(t => (
        <p key={t.id}>{t.name}</p>
      ))}
      
    </div>
  );
}

export default App;
