import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {

  let [flights, setFlights]=useState([])
  let [flightList, setflightList] = useState([])
  let [origin, setOrigin]=useState('')
  let [final_destination, setFinalDestination] = useState('')
  let [output, setOutput]=useState('')

  function handleAddInputs(event){
    if(origin!=='' && final_destination!=='' && final_destination!==origin)
    {
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

  useEffect(() => {
    axios.get('http://localhost:8080/flights', flights).then((data) => {
      setflightList(data.data)
    }).catch((data)=>{
      setflightList([])
    })
  },[]);

  function removeFlight(e) {
    setFlights(flights.filter(function(flight) { 
        return flight !== e 
  }));
}
  return (
    <div className="App"><br/>
        <div style={{"minWidth":"100px"}}>From</div>
        <select style={{"width":"100px"}} value={origin} onChange={(e)=>setOrigin(e.target.value)}>
          {
            flightList.map(function(item){
              return <option value={item}>{item}</option>
            })
          }
        </select>
        <br/>
        <div style={{"minWidth":"100px"}}>To</div>
        <select  style={{"width":"100px"}}  value={final_destination}  onChange={(e)=>setFinalDestination(e.target.value)}>
          {
            flightList.map(function(item){
              return <option value={item}>{item}</option>
            })
          }
        </select>
        <br/>
        <input style={{"margin":"15px"}}  type='submit' value="Add" onClick={handleAddInputs} /> 
        {flights?flights.map(function(item){
          return (<div>{item[0]}-{item[1]}<button style={{"marginLeft":"10px","fontSize":"10px", "cursor":"pointer"}} onClick={(e)=>removeFlight(item)}>X</button></div>)
        }):null}
        <br/>
        <button style={{"margin":"5px"}}   onClick={calculate}>Calculate</button>
        <div>{output!==''?`The travel was from ${output[0]} to ${output[1]}`:null}</div>
    </div>
  );
}
export default App;
