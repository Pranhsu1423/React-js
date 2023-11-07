import React, { useState } from "react";
import "./App.css";

function App() {
  var [status, setStatus] =React.useState(false);
// var data= PRANSHU singh;
  return (
    <div className="App">
      <h4> Get input value</h4>

      { status? <h3> I'm Pranshu Singh here </h3> :null }
     
      <button onClick={()=> setStatus (false)}> Hide </button>
      <button onClick={()=> setStatus (true)}> show </button>

    </div>
  );
}

export default App;
