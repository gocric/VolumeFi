import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

let cors = require('cors')

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
    setOutput('')
    axios.post('http://localhost:8080/calculate', flights).then((data) => {
      console.log(data)
      setOutput(data.data)
    }).catch((data)=>{
      setOutput([data.response.data,""])
    })
  }


  function removeFlight(e) {
    setFlights(flights.filter(function(flight) { 
        return flight !== e 
  }));
}
  return (
    <div className="App"><br/>
        From : <input value={origin} onChange={(e)=>setOrigin(e.target.value)}/><br/>
        To : <input  value={final_destination} onChange={(e)=>setFinalDestination(e.target.value)} onKeyDown={handleAddInputs} /> 
        {flights.map(function(item){
          return (<div>{item[0]}-{item[1]}<a style={{"paddingLeft":"10px", "cursor":"pointer"}} onClick={(e)=>removeFlight(item)}>X</a></div>)
        })}
        <br/>
        <button onClick={calculate}>Calculate</button>
        <div>{output!==''?`${output[0]},${output[1]}`:null}</div>
    </div>
  );
}
export default App;
