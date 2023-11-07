
// import logo from "./logo.svg";
import React, {useState} from "react";
import "./App.css";
import Student from "./Student_props";
// import Button from '@mui/material/Button'

function App() {
  const [name, setName]= useState('PRNAHSU');
  const [date, setData]= useState(0);

  function UpdateData(){
    setData(date+1);
  }
  return (
    <div className="App">
      <h3>{date}</h3>
    
      <button onClick={UpdateData}>
        Counter
      </button>
   
    </div>
  );
}

export default App;
