import React from "react";
import { FormGroup, Input } from "../styles/Form";

const formInput = ({ handleChange, ...otherProps }) => {
  return (
    <FormGroup>
      <Input onChange={handleChange} {...otherProps} />
    </FormGroup>
  );
};

export default formInput;
