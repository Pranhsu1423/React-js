import "./App.css";
import React,{ useState, useEffect } from "react"

function App(){
  const [count, setCount] = useState(0);
 useEffect(()=> {
  console.warn("useEffect");
 })
 
  return (
    <div className="App">
      <h4> useEffect {count}</h4>
      <button onClick={() => setCount(count + 1)}>
        Click me </button>
    </div>
  );
}

export default App;
