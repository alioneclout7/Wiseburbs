import React, { useState } from "react";
import BasicDropdown from "../../components/common/dropdown/dropdown";
import Portfolio from "../../components/portfolio/portfolio";

const Tool = () => {
  const dropdownChoice = [
    "Investment property CashFlow",
    "Portfolio Analyzer",
    "Rennovation Feasibility Tool",
    "Tax Depriciation Calculator",
    "Salary & Pay Tax Calculator",
    "residential Building Cost Calculator",
    "Stamp Duty Calculator",
    "Borrowing Power Calculator",
    "Capital Gains Tax Calculator",
    "Loan Comparison Calculator",
    "Principal & Interest Calculator",
  ];

  const [selectedTool, setSelectedTool] = useState("Portfolio Analyzer");
  return (
    <div
      className=""
      style={{ backgroundColor: "#ede8e8", minHeight: "100vh" }}
    >
      {/* <div className="mt-3 d-flex justify-content-end">
        <BasicDropdown values={dropdownChoice} title={"Select Tool Type"} />
      </div> */}

      {selectedTool === "Portfolio Analyzer" && <Portfolio />}
    </div>
  );
};

export default Tool;
