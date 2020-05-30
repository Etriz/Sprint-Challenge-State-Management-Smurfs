import React, { useContext } from "react";
import { SmurfContext } from "../contexts/SmurfContext";

const SmurfDisplay = () => {
  const { smurfData } = useContext(SmurfContext);
  return (
    <div>
      {smurfData.map((smurf) => (
        <div>
          <p>Name: {smurf.name}</p>
          <p>Age: {smurf.age}</p>
          <p>Height: {smurf.height}</p>
        </div>
      ))}
    </div>
  );
};

export default SmurfDisplay;
