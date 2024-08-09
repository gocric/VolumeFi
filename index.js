const express = require('express');
const app = express();
const port = 8080;

app.get('/calculate', (req, res) => {
  const flights =[['IND', 'EWR'], ['SFO', 'ATL'], ['GSO', 'IND']];
  let from_destinations = new Set();
  let to_destinations = new Set();
  for (const [from_destination, to_destination] of flights) {
    from_destinations.add(from_destination)
    to_destinations.add(to_destination)
  }
  console.log(from_destinations)
  let all_destinations = new Set([...from_destinations, ...to_destinations]);
  from_destinations =[...from_destinations]
  to_destinations = [...to_destinations]
  let origin = [...all_destinations].filter(x => !to_destinations.includes(x))
  let final_destination = [...all_destinations].filter(x => !from_destinations.includes(x))
  if (origin.length==1 && final_destination.at.length==1)
  {
    res.json([origin,final_destination]);
  }
  else{
    res.status(500).json("Cannot find origin and destination based on the given information")
  }
});

app.listen(port, () => {
  console.log(`Microservice listening on port ${port}`);
});