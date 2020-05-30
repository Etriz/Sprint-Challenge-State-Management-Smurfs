import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import { SmurfContext } from "../contexts/SmurfContext";

import AddSmurfForm from "./AddSmurfForm";
import SmurfDisplay from "./SmurfDisplay";
const App = () => {
  const [smurfData, setSmurfData] = useState([]);

  const deleteSmurf = (id) => {
    axios
      .put(`http://localhost:3333/smurfs/:${id}`)
      .then((res) => console.log(res.data).catch((err) => console.log(err)));
  };

  useEffect(() => {
    axios
      .get("http://localhost:3333/smurfs")
      .then((res) => {
        console.log(res.data);
        const data = localStorage.getItem("smurfs");
        setSmurfData(data || res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <SmurfContext.Provider value={{ smurfData, setSmurfData, deleteSmurf }}>
      <div className="App">
        <h1>SMURFS! 2.0 W/ Context</h1>
        {/* <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div> */}
        <AddSmurfForm />
        <SmurfDisplay />
      </div>
    </SmurfContext.Provider>
  );
};

export default App;
