import React, { useRef, useState } from "react";

import Pizza from "../Dishes/Pizza";
import Soup from "../Dishes/Soup";
import Sandwich from "../Dishes/Sandwich";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    preparation_time: "00:00:00",
    type: "",
    dishInfo: {},
  });
  const formRef = useRef(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "type") {
      setFormData({ ...formData, dishInfo: {}, [name]: value });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleDishInputChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      dishInfo: { ...formData.dishInfo, [name]: value },
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // send data to API here
    fetch("https://umzzcc503l.execute-api.us-west-2.amazonaws.com/dishes/", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => {
        console.log(error);
      });

    // reset the form
    formRef.current.reset();
    setFormData({
      name: "",
      preparation_time: "00:00:00",
      type: "",
    });
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        name="name"
        id="name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <label htmlFor="preparation_time">Preparation time:</label>
      <input
        type="time"
        name="preparation_time"
        id="preparation_time"
        value={formData.preparation_time}
        onChange={handleChange}
        min="00:00:01"
        step="1"
        required
      />
      <label htmlFor="type">Type:</label>
      <select name="type" id="type" onChange={handleChange} required>
        <option value="">Please select a dish type</option>
        <option value="pizza">Pizza</option>
        <option value="soup">Soup</option>
        <option value="sandwich">Sandwich</option>
      </select>
      {formData.type === "pizza" ? (
        <Pizza formData={formData} onChange={handleDishInputChange} />
      ) : formData.type === "soup" ? (
        <Soup formData={formData} onChange={handleDishInputChange} />
      ) : formData.type === "sandwich" ? (
        <Sandwich formData={formData} onChange={handleDishInputChange} />
      ) : null}
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
