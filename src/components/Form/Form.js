import React, { useRef, useState, useEffect } from "react";

import Pizza from "../Dishes/Pizza";
import Soup from "../Dishes/Soup";
import Sandwich from "../Dishes/Sandwich";
import SuccessPopup from "../Popups/SuccessPopup";
import ErrorPopup from "../Popups/ErrorPopup";
import {
  StyledForm,
  StyledButton,
  StyledFieldset,
  StyledLegend,
  StyledPizzaIcon,
  StyledSoupIcon,
  StyledSandwichIcon,
  StyledImgContainer,
  StyledWrapper,
  StyledRadioInput,
  StyledDishTypeName,
} from "./style";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    preparation_time: "00:00:00",
    type: "",
  });
  const [isFormValid, setIsFormValid] = useState({
    isValid: false,
    errorMsg: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const formRef = useRef(null);

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
      setIsFormValid({
        isValid: false,
        errorMsg: "Name should have at least 3 characters",
      });
    } else if (preparation_time === "00:00:00") {
      setIsFormValid({
        isValid: false,
        errorMsg: "Please set preparation time",
      });
    } else if (type === "") {
      setIsFormValid({
        isValid: false,
        errorMsg: "Please select dish type",
      });
    } else if (type === "pizza") {
      if (Number(no_of_slices) < 1) {
        setIsFormValid({
          isValid: false,
          errorMsg: "Please give number of slices",
        });
      } else if (Number(diameter) < 10) {
        setIsFormValid({
          isValid: false,
          errorMsg: "Diameter should be at least 10 cm",
        });
      } else
        setIsFormValid({
          isValid: true,
          errorMsg: "",
        });
    } else if (type === "soup") {
      if (spiciness_scale === "") {
        setIsFormValid({
          isValid: false,
          errorMsg: "Please select spiciness",
        });
      } else
        setIsFormValid({
          isValid: true,
          errorMsg: "",
        });
    } else if (type === "sandwich") {
      if (Number(slices_of_bread) < 1) {
        setIsFormValid({
          isValid: false,
          errorMsg: "Please give number of slices of bread required",
        });
      } else
        setIsFormValid({
          isValid: true,
          errorMsg: "",
        });
    } else
      setIsFormValid({
        isValid: true,
        errorMsg: "",
      });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (value === "pizza") {
      setFormData({
        name: formData.name,
        preparation_time: formData.preparation_time,
        type: value,
        no_of_slices: "",
        diameter: "",
      });
    } else if (value === "soup") {
      setFormData({
        name: formData.name,
        preparation_time: formData.preparation_time,
        type: value,
        spiciness_scale: "",
      });
    } else if (value === "sandwich") {
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

  const handleSubmit = (event) => {
    event.preventDefault();
    validateForm();
  };

  useEffect(() => {
    if (isFormValid.isValid) {
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
  }, [isFormValid]);

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
          <StyledRadioInput
            type="radio"
            className="visually-hidden"
            name="type"
            id="pizza"
            value="pizza"
          />
          <label htmlFor="pizza">
            <StyledDishTypeName>Pizza</StyledDishTypeName>
            <StyledImgContainer className="img-container">
              <StyledPizzaIcon fill="#fed55fff" />
            </StyledImgContainer>
          </label>
        </StyledWrapper>
        <StyledWrapper className="input-wrapper">
          <StyledRadioInput
            type="radio"
            className="visually-hidden"
            name="type"
            id="soup"
            value="soup"
          />
          <label htmlFor="soup">
            <StyledDishTypeName>Soup</StyledDishTypeName>
            <StyledImgContainer className="img-container">
              <StyledSoupIcon fill="#fed55fff" />
            </StyledImgContainer>
          </label>
        </StyledWrapper>
        <StyledWrapper className="input-wrapper">
          <StyledRadioInput
            type="radio"
            className="visually-hidden"
            name="type"
            id="sandwich"
            value="sandwich"
          />
          <label htmlFor="sandwich">
            <StyledDishTypeName>Sandwich</StyledDishTypeName>
            <StyledImgContainer className="img-container">
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
      {isFormSubmitted ? <SuccessPopup /> : null}
      {isFormValid.errorMsg ? (
        <ErrorPopup errorMsg={isFormValid.errorMsg} />
      ) : null}
    </StyledForm>
  );
};

export default Form;
