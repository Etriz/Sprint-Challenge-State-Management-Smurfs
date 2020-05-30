import React, { useState } from "react";

const AddSmurfForm = () => {
  const [formData, setFormData] = useState({ name: "", age: "", height: "" });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Smurf</h2>
      <label htmlFor="">
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
      <label htmlFor="">
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
      <label htmlFor="">
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
