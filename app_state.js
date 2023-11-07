// import logo from "./logo.svg";
import React, {useState} from "react";
import "./App.css";
// import User from "./User";

function App() {
let [data, setData] = useState("Pranshu Singh")

const updateData = ()=>{
setData("I'm Pranshu Singh");
data = "Pranshu"
alert('data');
};

console.log("Render------");

return (
<div className="App">
<h2> {data} </h2>
<button onClick={updateData}>
update value
</button>
</div>
);
}

export default App;