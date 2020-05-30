import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import { SmurfContext } from "../contexts/SmurfContext";

import AddSmurfForm from "./AddSmurfForm";
import SmurfDisplay from "./SmurfDisplay";
const App = () => {
  const [smurfData, setSmurfData] = useState([]);
  const [errorState, setErrorState] = useState("");

  const deleteSmurf = (id) => {
    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then((res) => {
        console.log(res.data);
        const newData = res.data;
        newData.length > 0
          ? localStorage.setItem("smurfs", JSON.stringify(newData))
          : localStorage.removeItem("smurfs");
        setSmurfData(newData);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios
      .get("http://localhost:3333/smurfs")
      .then((res) => {
        console.log("API data", res.data);
        const data = JSON.parse(localStorage.getItem("smurfs"));
        setSmurfData(data ? data : res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <SmurfContext.Provider
      value={{ smurfData, setSmurfData, deleteSmurf, errorState, setErrorState }}>
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
