import React from "react";
import "./displayCard.css";

const DisplayCard = (props) => {
  const { title, classname } = props;
  return (
    <div
      className={`d-flex align-items-center justify-content-center card-container ${classname}`}
    >
      <p
        className="px-2"
        style={{ fontSize: "12px", color: "#ffffff", fontWeight: "600" }}
      >
        {" "}
        {title}
      </p>
    </div>
  );
};

export default DisplayCard;
