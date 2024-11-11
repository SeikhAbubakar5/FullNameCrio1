import React, { useState } from "react";
import './App.css';

function App() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [fullName, setFullname] = useState("");
  const [errors, setErrors] = useState({ fname: "", lname: "" });

  const handleClick = (e) => {
    e.preventDefault();

    const newErrors = {
      fname: fname.trim() ? "" : "Please fill out this field",
      lname: lname.trim() ? "" : "Please fill out this field",
    };
    setErrors(newErrors);

    if (!newErrors.fname && !newErrors.lname) {
      setFullname(`${fname} ${lname}`);
    } else {
      setFullname(""); 
    }
  };

  return (
    <div className="App">
      <h1>Full Name Display</h1>
      <form onSubmit={handleClick}>
        <div>
          <label>
            First Name:
            <input
              type="text"
              value={fname}
              onChange={(e) => setFname(e.target.value)}
            />
          </label>
          {errors.fname && (
            <p style={{ color: "red", margin: "5px 0" }}>{errors.fname}</p>
          )}
        </div>
        <div>
          <label>
            Last Name:
            <input
              type="text"
              value={lname}
              onChange={(e) => setLname(e.target.value)}
            />
          </label>
          {errors.lname && (
            <p style={{ color: "red", margin: "5px 0" }}>{errors.lname}</p>
          )}
        </div>
        <button type="submit">Submit</button>
      </form>

      {fullName && (
        <div>
          <h2>Full Name: {fullName}</h2>
        </div>
      )}
    </div>
  );
}

export default App;
