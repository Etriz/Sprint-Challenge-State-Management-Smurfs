import React, { useState, useContext } from "react";
import axios from "axios";
import { SmurfContext } from "../contexts/SmurfContext";

const defaultForm = { name: "", age: "", height: "" };

const AddSmurfForm = () => {
  const [formData, setFormData] = useState(defaultForm);
  const { setSmurfData, setErrorState } = useContext(SmurfContext);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    window.blur();
    axios
      .post("http://localhost:3333/smurfs", formData)
      .then((res) => {
        // console.table(res.data);
        const newData = res.data;
        localStorage.setItem("smurfs", JSON.stringify(newData));
        setSmurfData(newData);
      })
      .catch((err) => {
        console.log(err.response.data);
        // setErrorState(err.response.data);
      });
    setFormData(defaultForm);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Smurf</h2>
      <label htmlFor="name">
        Name
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          placeholder="Add Name"
          onChange={handleChange}
        />
      </label>
      <label htmlFor="age">
        Age
        <input
          type="text"
          id="age"
          name="age"
          value={formData.age}
          placeholder="Add Age"
          onChange={handleChange}
        />
      </label>
      <label htmlFor="height">
        Height
        <input
          type="text"
          id="height"
          name="height"
          value={formData.height}
          placeholder="Add Height"
          onChange={handleChange}
        />
      </label>
      <button>Add Smurf</button>
    </form>
  );
};

export default AddSmurfForm;
