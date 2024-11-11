import React, { useState } from "react"
import toast, { Toaster } from 'react-hot-toast';
import './App.css';

function App() {

  const [fname, setFname]=useState("")
  const [lname, setLname]=useState("")
  const [fullName, setFullname]=useState("")

  const handleClick=(e)=>{
    e.preventDefault()
    if (!fname || !lname) {
      toast.error('Please fill out this field.');
      return;
    }
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
            <h2>Full Name: {fullName}</h2>
            <Toaster position="top-center" />
         </div>
    </div>
    
  );
}

export default App;
