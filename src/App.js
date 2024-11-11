import React, { useState } from "react";
import './App.css';

function App() {

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [fullName, setFullname] = useState("");
  const [errors, setErrors] = useState({});

  const handleClick = (e) => {
    e.preventDefault();
    const validationErrors = validate({ fname, lname });
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setFullname(`${fname} ${lname}`);
    } else {
      setFullname(''); 
    }
  }

  const validate = (values) => {
    const err = {};
    const regex = /[-’/`~!#*$@_%+=.,^&(){}[\]|;:”<>?\\]/g;

    if (!values.fname) {
      err.fname = "Please fill out this field";
    } else if (regex.test(values.fname)) {
      err.fname = "This is not a correct input";
    }

    if (!values.lname) {
      err.lname = "Please fill out this field";
    } else if (regex.test(values.lname)) {
      err.lname = "This is not a correct input";
    }

    return err;
  }

  return (
    <div className="App">
      <h1>Full Name Display</h1>
      <form onSubmit={handleClick}>
        <div>
          <label>
            FirstName:
            <input type="text" value={fname} onChange={(e) => setFname(e.target.value)} />
          </label>
          {errors.fname && <p style={{ color: 'red', margin: '5px 0' }}>{errors.fname}</p>}
        </div>
        <div>
          <label>
            LastName:
            <input type="text" value={lname} onChange={(e) => setLname(e.target.value)} />
          </label>
          {errors.lname && <p style={{ color: 'red', margin: '5px 0' }}>{errors.lname}</p>}
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
