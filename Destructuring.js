import React from "react";
// *********** Destructuring Props on value//

// function Destructuring( {name, age}) {
//   return (
//     <div style={{ textAlign: "center" }}>
//       <h2> {name} </h2> <br></br>
//       <h2> {age} </h2> <br></br>
//     </div>
//   );
// }

// *********** Destructuring Props in variable//
function Destructuring(props) {
  var {name, age} = props
  return (
    <div style={{ textAlign: "center" }}>
      <h2> {name} </h2> <br></br>
      <h2> {age} </h2> <br></br>
    </div>
  );
}

export default Destructuring;
