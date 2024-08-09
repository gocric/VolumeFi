const express = require('express');
const app = express();
const port = 8080;
let cors = require('cors')

var corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }
app.use(express.json()); // Middleware to parse JSON request bodies

app.get('/flights',( req, res)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");  
    res.json([
        "","EWR","PHX","SFO","SJC","OAK","MAA","DHO","JFK"
    ])
});

app.post('/calculate', (req, res) => {
 console.log(req.body)
  const flights = req.body;
  let from_destinations = new Set();
  let to_destinations = new Set();
  for (const [from_destination, to_destination] of flights) {
    from_destinations.add(from_destination)
    to_destinations.add(to_destination)
  }

  let all_destinations = new Set([...from_destinations, ...to_destinations]);
  from_destinations =[...from_destinations]
  to_destinations = [...to_destinations]
  let origin = [...all_destinations].filter(x => !to_destinations.includes(x))
  let final_destination = [...all_destinations].filter(x => !from_destinations.includes(x))
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");  
  console.log(origin)
  console.log(final_destination)
  if (origin.length!=1 || final_destination.length!=1)
  {
    res.status(500).json("Cannot find origin and destination based on the given information")

  }
  else{
    res.json([origin[0],final_destination[0]]);
  }
});
app.use(cors(corsOptions))
app.listen(port, () => {
  console.log(`Microservice listening on port ${port}`);
});