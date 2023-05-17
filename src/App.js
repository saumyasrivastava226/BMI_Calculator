import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import React from "react";

function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBMI] = useState();
  const [message, setMessage] = useState("");
  let calcBmi = (e)=>{
      e.preventDefault();
     if(height==0||weight==0)
      alert('Please enter valid height and weight');
      
     else
     {
          let bmi= (weight/(height*height)*703);
          setBMI(bmi.toFixed(1));

          if(bmi<25)
            setMessage(' You are underweight');
          else if(bmi>=25&&bmi<30)
            setMessage(' You are healthy');
          else
             setMessage(' You are overweight');
     }
  }

  // reload 
  let reload=()=>{
      window.location.reload();
  }
  return (
    <div className="App">
      <div className="container">
        <h2>BMI Calculator</h2>
        <form onSubmit={calcBmi}>
          <div>
            <label>Weight in lbs</label>
            <input
              type="text"
              placeholder="Enter Weight in lbs"
              value={weight}
              onChange={(e)=> setWeight(e.target.value)} 
            />
          </div>
          <div>
            <label>Height</label>
            <input type="text" placeholder="Enter your height" value={height}
             onChange={(e)=>setHeight(e.target.value)} />
          </div>

          <div>
            <button type="submit" className="btn">
              Submit
            </button>
            <button type="button" className="btn btn-outline" onClick={reload}>
              Reload
            </button>
          </div>

          <div className="center">
            <h3> Your BMI is {bmi}</h3>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
