import React from "react";
import "./title.css";

const Title = (props) => {
  const { title, classname } = props;
  return <div className={`${classname} w-75`}>{title}</div>;
};

export default Title;
