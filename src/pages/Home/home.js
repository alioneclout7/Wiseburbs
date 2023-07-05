import React, { useState } from "react";
import "./home.css";
import DisplayCard from "../../components/common/card/displayCard";
import RadioButton from "../../components/common/button/radioButton";
import Title from "../../components/common/title/title";
import MultiRangeSlider from "../../components/common/multiRangeSlider/multiRangeSlider";
import Button from "../../components/common/button/button";
import Navbar from "../../components/navbar/navbar";

const Home = () => {
  const buttonOptions = ["Houses", "Units"];
  const handleSelect = (event) => {
    console.log("event value getting in handle select event", event);
  };

  const australianStates = [
    "New South Wales",
    "Victoria",
    "QueensLand",
    "Tasmania",
    "Western Australia",
    "South Australia",
    "ACT",
  ];

  return (
    <div className="home-container">
      <Navbar />

      <div className="py-2 d-flex justify-content-center">
        <Title
          title={"To get started, click on your investment strategy below"}
          classname={"title"}
        />
      </div>

      <div className="d-flex justify-content-around p-5">
        <DisplayCard
          title={"Predominantly, Capital Growth"}
          classname={"blue-card"}
        />
        <DisplayCard
          title={"Predominantly, Cash Flow"}
          classname={"orange-card"}
        />
        <DisplayCard
          title={"A nice wealthy balance of both Growth AND Cash Flow"}
          classname={"green-card"}
        />
      </div>

      <div className="w-100 d-flex justify-content-center">
        <div className="mt-4 d-flex flex-row justify-content-between gap-4 w-25">
          <RadioButton
            buttonOptions={buttonOptions}
            handleSelect={handleSelect}
          />
        </div>
      </div>

      <div className="mt-5 d-flex justify-content-center">
        <Title title={"What is your maximum budget?"} classname={"title"} />
      </div>

      <div className="mt-3">
        <MultiRangeSlider
          min={0}
          max={1000}
          onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
        />
      </div>

      <div className="mt-5 d-flex justify-content-center">
        <Title
          title={"Which Australian States/Territories do you want to avoid?"}
          classname={"title"}
        />
      </div>
      <div className="mt-5 d-flex justify-content-center">
        <select
          class="form-select"
          style={{ width: "50%" }}
          //   onChange={handleFilter}
        >
          {australianStates?.map((state) => (
            <option>{state}</option>
          ))}
        </select>
      </div>

      <div className="mt-5 d-flex justify-content-center">
        <Title
          title={
            "Which type of suburbs do you wish to include based on proximity to large population centers proximity to large population centers?"
          }
          classname={"title"}
        />
      </div>
      <div className="mt-5 d-flex justify-content-center">
        <select
          class="form-select"
          style={{ width: "50%", marginBottom: "50px" }}
          //   onChange={handleFilter}
        >
          {australianStates?.map((state) => (
            <option>{state}</option>
          ))}
        </select>
      </div>

      <div className="d-flex">
        <Button
          title={"Show me my Wiseburbs"}
          classname={"btn-green p-4 btn-font mt-5"}
        />
      </div>

      <div className="d-flex">
        <Button
          title={
            "Find out the data pointing to why these suburbs made the list"
          }
          classname={"btn-primary py-2 px-4 btn-font mt-5"}
        />
      </div>

      <div className="mt-4 mb-3 px-5 w-100 d-flex justify-content-center">
        <div className="" style={{ width: "60%" }}>
          <p className="description">
            Now that you've narrowed down your suburbs, there's just one more
            step - find the right property!
          </p>
          <p className="description">
            If you don't have the confidence or time to find the right property,
            click on the chosen suburb for recommendations of Buyers Agents in
            the area.
          </p>
          <p className="description">
            If you don't have the time, but not the expertise and you're
            williung tyo give it a go, check out our how-to videos to be walked
            through the process
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
