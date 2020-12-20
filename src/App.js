
import './App.css';
import { useState } from 'react';

function App() {
   setInterval(updateTime,1000);
  const now = new Date().toLocaleTimeString();

  const[laps,setlaps] = useState('');
  
  const [time,setTime] = useState(now);
  function updateTime(){
    const newTime = new Date().toLocaleTimeString();
      setTime(newTime);
     
  }
  function handleClick(){
    const newTime = new Date().toLocaleTimeString();
    setlaps(newTime);
  }

  return (
         <div className="container">
        <h1>{time}</h1>
        <p>{laps}</p>
        <button onClick={handleClick}>PUSH TIME</button>

         </div>
  );
}

export default App;
