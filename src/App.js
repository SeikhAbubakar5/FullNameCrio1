import React, { useState } from "react"
import './App.css';

function App() {

  const [fname, setFname]=useState("")
  const [lname, setLname]=useState("")
  const [fullName, setFullname]=useState("")

  const handleClick=(e)=>{
    e.preventDefault()
    setFullname(`${fname} ${lname}`)
  }

  return (
    <div className="App">
         <form onSubmit={handleClick}>
          <div>
              <label>
                FirstName:
                <input type="text" value={fname} onChange={((e)=>setFname(e.target.value))}/>
              </label>
          </div>
          <div>
            <label>
              LastName:
              <input type="text" value={lname} onChange={((e)=>setLname(e.target.value))}/>
            </label>
          </div>
          <button type="submit">Submit</button>
         </form>

         <div>
            <h3>Full Name:{fullName}</h3>
         </div>
    </div>
    
  );
}

export default App;
