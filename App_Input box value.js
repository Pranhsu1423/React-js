import React, { useState } from "react";
import "./App.css";

function App() {
  var [data, setData] = useState(null);
  var [print, setPrint] = useState(false);


  function getData(val) {
    console.log(val.target.value);
    setData(val.target.value);
  }
  return (
    <div className="App">
      <h4> Get input value</h4>
        // these are condations ?= if and := else
      { print? <h3>{data}</h3> :null }
      {/* <h3>{data}</h3> */}
      <input type="text" onChange={getData} />
      <button onClick={()=> setPrint (true)}> Print data  </button>
    </div>
  );
}

export default App;
