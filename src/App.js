import React, { useState } from "react"
import './App.css';

function App() {

  const [fname, setFname]=useState("")
  const [lname, setLname]=useState("")
  const [fullName, setFullname]=useState("")
  const [errors, setErrors] = useState({ firstName: false, lastName: false });

  const handleClick=(e)=>{
    e.preventDefault()
    const newErrors = {
      firstName: !fname.trim(),
      lastName: !lname.trim(),
    };
    setErrors(newErrors);
 
    if (newErrors.firstName || newErrors.lastName) {
      setFullname(""); 
      return;
    }
    setFullname(`${fname} ${lname}`)
  }

  return (
    <div className="App">
      <h1>Full Name Display</h1>
         <form onSubmit={handleClick}>
          <div>
              <label>
                FirstName:
                <input type="text" value={fname} onChange={((e)=>setFname(e.target.value))}/>
              </label>
              {errors.firstName && (
          <p style={{ color: 'red', margin: '5px 0' }}>Please fill out this filed</p>
        )}
          </div>
          <div>
            <label>
              LastName:
              <input type="text" value={lname} onChange={((e)=>setLname(e.target.value))}/>
            </label>
            {errors.lastName && (
          <p style={{ color: 'red', margin: '5px 0' }}>Please fill out this filed</p>
        )}
          </div>
          <button type="submit">Submit</button>
         </form>

         <div>
            <h2>Full Name: {fullName}</h2>
         </div>
    </div>
    
  );
}

export default App;
