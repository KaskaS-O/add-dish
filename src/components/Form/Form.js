import React, { useRef, useState } from "react";

import Pizza from "../Dishes/Pizza";
import Soup from "../Dishes/Soup";
import Sandwich from "../Dishes/Sandwich";
import { StyledForm, StyledButton, StyledSelect } from "./style";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    preparation_time: "00:00:00",
    type: "",
  });
  const formRef = useRef(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "type" && value !== formData.type) {
      setFormData({
        name: formData.name,
        preparation_time: formData.preparation_time,
        type: value,
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // send data to API
    fetch("https://umzzcc503l.execute-api.us-west-2.amazonaws.com/dishes", {
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
    <StyledForm ref={formRef} onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        name="name"
        id="name"
        value={formData.name}
        minLength="3"
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
      <StyledSelect name="type" id="type" onChange={handleChange} required>
        <option value="">Please select a dish type</option>
        <option value="pizza">Pizza</option>
        <option value="soup">Soup</option>
        <option value="sandwich">Sandwich</option>
      </StyledSelect>
      {formData.type === "pizza" ? (
        <Pizza formData={formData} onChange={handleChange} />
      ) : formData.type === "soup" ? (
        <Soup formData={formData} onChange={handleChange} />
      ) : formData.type === "sandwich" ? (
        <Sandwich formData={formData} onChange={handleChange} />
      ) : null}
      <StyledButton type="submit">Submit</StyledButton>
    </StyledForm>
  );
};

export default Form;
