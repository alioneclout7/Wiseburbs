import React from "react";
import Form from "react-bootstrap/Form";
import "./button.css";

const RadioButton = (props) => {
  const { buttonOptions, handleSelect, selected } = props;
  return (
    // <div className="gap-3 my-2 ">
    <>
      {buttonOptions?.map((val) => (
        <div>
          <Form.Check
            className="mt-1"
            type="radio"
            label={val}
            // defaultChecked={"Units"}
            value={val}
            checked={selected === val}
            onChange={(e) => handleSelect(e)}
          />
        </div>
      ))}
    </>
    // </div>
  );
};

export default RadioButton;
