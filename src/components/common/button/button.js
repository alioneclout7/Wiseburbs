import React from "react";
import "./button.css";

const Button = (props) => {
  const { title, classname } = props;
  return (
    <button
      className={`btn  mx-auto  ${classname}`}
      //   type="submit"
      //   onClick={handleForgotPassword}
      style={{}}
    >
      {title}
    </button>
  );
};

export default Button;
