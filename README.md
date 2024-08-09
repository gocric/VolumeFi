<b>Prerequisites</b><br/>

Node.js 20+
We officially support the current LTS version – 20 at the time of writing. 

<B>Installing Node.js</b><br/>
Follow the instructions for your operating system found here: nodejs.org/en/download

<b>Instructions to run</b><br/>

<ul>
  <li>Clone the repository to your computer</li>
  <li>Move to the root folder of the project, which has it the main.py file and run the command <i>node index.js</i></li>
  <li>This will start the web server, serving at port 8080.</li>
  <li>Open a new terminal and go to the <rootfolder>/client folder</li>
  <li>Run the command <i>node start</i> and it will start a react web server for the UI</li>
</ul>

<b>How it works</b><br/>
<ul>
  <li>
    The enpoint can be access with <i>http://localhost:8080/calculate</i>
  </li>
    <li>
    It is a post request and it accepts data in the following format <b>[['IND', 'EWR'], ['SFO', 'ATL'], ['GSO', 'IND'], ['ATL', 'GSO']]</b>
  </li>
<li>
    The web application running in <i>http://localhost:3000</i> allows you to access the API
  </li>
  <li>
    In the web application, choose the from and to location using the dropdown list box and click on the add button
  </li>
  <li>
    Clicking on the calculate button will showing the original origin and destination of the user, but accessing the endpoint we created as localhost:8080
  </li>
</ul>

<b>Key points to node</b><br/>
<ul>
  <li>
    You can remove an added entry by clicking on the close button next to each origin-destination row
  </li>
  <li>Add button will not work if from and to are empty, or if they are equal</li>
  <li>In cases where the data is not sufficent to find the origin and destination, we will get a message saying so.</li>
</ul>

