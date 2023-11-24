import React,  {useState} from "react";

const Login = () => {
  var [email, setEmail] = useState('');
  var [password, setPassword] = useState('');
  var [AllEntry, setAllEntry] = useState([]);

  var newEntry = {password: password, email: email};
  
  function handleSubmit(e) {
    e.preventDefault();
    setAllEntry([...AllEntry, newEntry]);
    console.log(AllEntry);
    
    console.log('You clicked submit.');
  }
  return (
    <>
      <form action="post" onSubmit={handleSubmit}>
        <div>
          <h2> LOGIN FORM </h2>

          <label htmlFor="Email" />
          EMAIL
          <input type="email" name="email" id="mail" autocomplete="off" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div>
          <label htmlFor="Email" />
          Password
          <input type="password" name="email" id="mail" autocomplete="off" value={password} onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <button type="submit">LOGIN</button>
      </form>

      <div>
        {
          AllEntry.map((current) => 
          
          {
            return(
              <div class='output_value'>
                <p>{current.email}</p>
                <p>{current.password}</p>
              </div>
            )
          })
        }
      </div>
    </>
  );
};

export default Login;
