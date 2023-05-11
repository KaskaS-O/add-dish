import React, { useRef, useState } from "react";

import Pizza from "../Dishes/Pizza";
import Soup from "../Dishes/Soup";
import Sandwich from "../Dishes/Sandwich";
import {
  StyledForm,
  StyledButton,
  StyledFieldset,
  StyledLegend,
  StyledPizzaIcon,
  StyledSoupIcon,
  StyledSandwichIcon,
  StyledCheckedIcon,
  StyledImgContainer,
  StyledWrapper,
} from "./style";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    preparation_time: "00:00:00",
    type: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const formRef = useRef(null);

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (value === "pizza") {
      console.log("pizza");
      setFormData({
        name: formData.name,
        preparation_time: formData.preparation_time,
        type: value,
        no_of_slices: "",
        diameter: "",
      });
    } else if (value === "soup") {
      console.log("soup");

      setFormData({
        name: formData.name,
        preparation_time: formData.preparation_time,
        type: value,
        spiciness_scale: "",
      });
    } else if (value === "sandwich") {
      console.log("sandwich");

      setFormData({
        name: formData.name,
        preparation_time: formData.preparation_time,
        type: value,
        slices_of_bread: "",
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const validateForm = () => {
    const {
      name,
      preparation_time,
      type,
      no_of_slices,
      diameter,
      spiciness_scale,
      slices_of_bread,
    } = formData;

    if (name.length < 3) {
      console.log("Name should have at least 3 characters");
      return false;
    } else if (preparation_time === "00:00:00") {
      console.log("Please set preparation time");
      return false;
    } else if (type === "") {
      console.log("Please select dish type");
      return false;
    } else if (type === "pizza") {
      if (Number(no_of_slices) < 1) {
        console.log("Please give number of slices");
        return false;
      } else if (Number(diameter) < 10) {
        console.log("Diameter should be at least 10 cm");
        return false;
      } else return true;
    } else if (type === "soup") {
      if (spiciness_scale === "") {
        console.log("Please select spiciness");
        return false;
      } else return true;
    } else if (type === "sandwich") {
      if (Number(slices_of_bread) < 1) {
        console.log("Please give number of slices of bread required");
        return false;
      } else return true;
    } else return true;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const isFormValid = validateForm();
    console.log(isFormValid);

    if (isFormValid) {
      // send data to API
      fetch("https://umzzcc503l.execute-api.us-west-2.amazonaws.com/dishes", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setIsFormSubmitted(true);
        })
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
    }
  };

  const handleSubmissionCancel = () => {
    if (isFormSubmitted) {
      setIsFormSubmitted(false);
    }
  };

  return (
    <StyledForm
      ref={formRef}
      onSubmit={handleSubmit}
      onFocus={handleSubmissionCancel}
      noValidate
      id="dish_form"
    >
      <label htmlFor="name">Dish name:</label>
      <input
        type="text"
        name="name"
        id="name"
        value={formData.name}
        placeholder="Please give your dish name"
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
      <StyledFieldset form="dish_form" onChange={handleChange}>
        <StyledLegend>Choose dish type:</StyledLegend>
        <StyledWrapper className="input-wrapper">
          <input
            type="radio"
            className="visually-hidden"
            name="type"
            id="pizza"
            value="pizza"
          />
          <label htmlFor="pizza">
            <span>Pizza</span>
            <StyledImgContainer className="img-container">
              <StyledPizzaIcon fill="#fed55fff" />
            </StyledImgContainer>
          </label>
        </StyledWrapper>
        <StyledWrapper className="input-wrapper">
          <input
            type="radio"
            className="visually-hidden"
            name="type"
            id="soup"
            value="soup"
          />
          <label htmlFor="soup">
            <span>Soup</span>
            <StyledImgContainer className="img-container">
              {" "}
              <StyledSoupIcon fill="#fed55fff" />
            </StyledImgContainer>
          </label>
        </StyledWrapper>
        <StyledWrapper className="input-wrapper">
          <input
            type="radio"
            className="visually-hidden"
            name="type"
            id="sandwich"
            value="sandwich"
          />
          <label htmlFor="sandwich">
            <span>Sandwich</span>
            <StyledImgContainer className="img-container">
              {" "}
              <StyledSandwichIcon fill="#fed55fff" />
            </StyledImgContainer>
          </label>
        </StyledWrapper>
      </StyledFieldset>
      {formData.type === "pizza" ? (
        <Pizza formData={formData} onChange={handleChange} />
      ) : formData.type === "soup" ? (
        <Soup formData={formData} onChange={handleChange} />
      ) : formData.type === "sandwich" ? (
        <Sandwich formData={formData} onChange={handleChange} />
      ) : null}
      <StyledButton type="submit">Add dish</StyledButton>
      {isFormSubmitted ? (
        <div>
          <StyledCheckedIcon />
          <p>Your dish was successfully added</p>
        </div>
      ) : null}
    </StyledForm>
  );
};

export default Form;
