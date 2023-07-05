import React from "react";
import Information from "../common/information/information";
import Navbar from "../navbar/navbar";
import Button from "../common/button/button";
import PortfolioMenu from "./portfolioMenu";

const Portfolio = () => {
  return (
    <>
      {" "}
      <Navbar />
      <div className="w-100 p-2">
        <div
          className="p-2"
          style={{
            background: "white",
            borderRadius: "10px",
            textAlign: "left",
          }}
        >
          Portfolio Analyzer
        </div>

        <div
          className="mt-3 px-3 py-2"
          style={{ background: "white", borderRadius: "4px" }}
        >
          <Information />
          <div
            className="mt-3 d-flex justify-content-between"
            style={{ fontWeight: "600" }}
          >
            <div>Portfolio Analyzer</div>
            <div>
              <Button title={"Add Property"} classname={"btn-primary p-1"} />
            </div>
          </div>
          <PortfolioMenu />
        </div>

        <div></div>
      </div>
    </>
  );
};

export default Portfolio;
