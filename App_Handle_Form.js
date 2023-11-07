import React, { useState } from "react";
import "./App.css";

function App() {
  let [name, stateName]= useState('');
  let [tnc, stateTnc]= useState('false');



  function getFormData(e){

    console.log(name, tnc);
    e.preventDefault()     
  }
  return (
    <div className="App">
      <h4> Get input value</h4>
      <form onSubmit={getFormData}>
        <input type="text" placeholder="this is your name" onChange={(e)=>stateName(e.target.value)} /> <br></br><br></br>
        <select onChange={(e)=>stateTnc(e.target.value)}>
          <option>Indore</option>
          <option>Satna</option>
          <option>Bhopal</option>
        </select><br></br> <br></br>
        <button>
          submit
        </button>
        
      </form>
    </div>
  );
}

export default App;
