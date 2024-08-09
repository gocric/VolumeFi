import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';


function App() {

  let [flights, setFlights]=useState([])

  let [origin, setOrigin]=useState('')
  let [final_destination, setFinalDestination] = useState('')
  let [output, setOutput]=useState('')
  
  function handleAddInputs(event){
    if (event.key === 'Enter') {
      setFlights([...flights,...[[origin, final_destination]]])
      setOrigin('')
      setFinalDestination('')
    }
  }
  function calculate(){
    axios.post('http://localhost:8080').then((data) => {
      //this console.log will be in our frontend console
      console.log(data)
    })
  }

  return (
    <div className="App"><br/>
        From : <input value={origin} onChange={(e)=>setOrigin(e.target.value)}/><br/>
        To : <input  value={final_destination} onChange={(e)=>setFinalDestination(e.target.value)} onKeyDown={handleAddInputs} /> 
        {flights.map(function(item){
          return (<div>{item[0]}-{item[1]}<a style={{"paddingLeft":"10px", "cursor":"pointer"}}>X</a></div>)
        })}
        <button onClick={calculate}>Calculate</button>
    </div>
  );
}

export default App;
