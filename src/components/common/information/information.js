import React from "react";

const Information = () => {
  return (
    <div
      className="p-2"
      style={{
        background: "#ffd8b496",
        textAlign: "left",
        border: "1px solid #ffa0003d",
      }}
    >
      <p style={{ fontSize: "12px" }}>
        The <strong>Portfolio Analyzer</strong> below lets you compare maximum
        of 10 different properties to help you identify how your overall
        portfolio is performing. At the same time to help you understand how
        each of your investment in portfolio. At the same time to help you
        understand how each of your investment in portfolio
      </p>

      <p style={{ fontSize: "12px" }}>
        Depreciation is not included in the Calculator as this is dependent on
        the type of investment property and the items within it.But note that
        depreciation of your investment property is something that you can claim
      </p>
    </div>
  );
};

export default Information;
