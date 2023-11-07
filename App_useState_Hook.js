import "./App.css";
import React,{useState} from "react"

function App(){
  var [data,setData]=useState("Pranshu")
  return (
    <div className="App">
      <h4> {data} </h4>
      <button onClick={()=> setData("Singh Baghel")}> Update Data  </button>
    </div>
  );
}

export default App;
