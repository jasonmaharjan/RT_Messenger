import React from "react";

import "./formInput.styles.scss";

const formInput = ({ handleChange, ...otherProps }) => {
  return (
    <div className="form-group">
      <input className="form-input" onChange={handleChange} {...otherProps} />
    </div>
  );
};

export default formInput;
