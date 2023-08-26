
import React, { useState } from "react";
import './weather.css';

const App = () => {
  const [City, Setcity] = useState("");
  const [result, setresult] = useState("");

  const ChangeHandler = (e) => {
    Setcity(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    let api = "bfb0fce7a7b4053784ded0d2a31afc0a";
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${City}&appid=${api}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
       const kel = data.main.temp;
       const cel = kel - 273.15;
       setresult(`Temperature at ${City}\n ${Math.round(cel)}°C`);
       Setcity("");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">weather App</h2>
          <form onSubmit={submitHandler}>
            <input type="text" name="city" value={City} onChange={ChangeHandler} />
            <br />
            <br />
            <input type="submit" value="Get temperature" />
          </form>
          <h4>{result}</h4>
        </div>
      </div>
    </div>
  );
};

export default App;
