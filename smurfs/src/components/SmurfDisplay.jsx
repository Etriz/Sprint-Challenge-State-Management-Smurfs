import React, { useContext } from "react";
import { SmurfContext } from "../contexts/SmurfContext";

const SmurfDisplay = () => {
  const { smurfData, deleteSmurf, errorState } = useContext(SmurfContext);

  return (
    <div>
      {smurfData.length > 0 ? (
        smurfData.map((smurf) => (
          <div key={smurf.id} className="smurfCard">
            <p>Name: {smurf.name}</p>
            <p>Age: {smurf.age}</p>
            <p>Height: {smurf.height}</p>
            <button onClick={() => deleteSmurf(smurf.id)}>Remove</button>
          </div>
        ))
      ) : (
        <>
          {/* <p>No Data Found</p> */}
          <p>{errorState}</p>
        </>
      )}
    </div>
  );
};

export default SmurfDisplay;
