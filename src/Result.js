import logo from "./logo.svg";
import "./App.css";
import topImage from "./topImage.png";

import { Router, useNavigate } from "react-router-dom";
import React, { useEffect, useState, useRef } from "react";

function Result() {
  let [result, setResult] = useState({});

  useEffect(() => {
    // api to get the result
      fetch('https://api.jsonbin.io/v3/b/650b497badb5f56d8f1887a8', {
        method: 'GET',
        headers: {
          'X-MASTER-KEY': '$2a$10$PTXt0.vIO/KoVhGpKCLmDu.W.sBd2B1OmEeJFgA2im8vxjszSBafu',
        },
      })
      .then((response) => {
        return response.json();
      })
      .then(data => {
          setResult(data.record)
      })
      .catch((err) => {
        console.log(err);
      });
      },[]);
  const navigate = useNavigate();

  let startAgain = () => {
    navigate("/startPage");
  };
  let rigthAns =result.right
  let wrong = result.wrong
  let percen = Math.floor((rigthAns / (wrong + rigthAns)) * 100); // calculate the percentage of right answers
  return (
    <div style={{ width: "100%" }}>
      <div className="topbar">
      <img src={topImage}/>
      </div>
      <div className="optionBox" style={{padding : "20px 10% 20px 10%"}}>
      <div className="content-container">
        <div className="resultHeading">Your Result</div>
       
        <div className="meter">
        <div class="container">
          <div class="gauge"></div>
            <div className="grey-circle"></div>
            <div className="white-circle">
                <div>{percen} %</div>
                </div>
            <div class="pointer animate autoAnimation" style={{transform: "rotate("+ (percen - 50) + "deg)"}} ></div>
          
        </div>
        </div>

        <div
          style={{
            margin: "0px 0vh 10vh 0vh",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div className="box" style={{ backgroundColor: "#bcf7c0" }}>
            <div className="boxValues">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z"
                  fill="#44B77B"
                />
              </svg>
              <div
                className="optionText"
                style={{ display: "flex", flexDirection: "row" }}
              >
                {rigthAns}
                <div style={{ padding: "0px 5px", opacity: 0.5026 }}>
                  {" "}
                  Correct{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="box" style={{ backgroundColor: "#f5a2a3" }}>
            <div className="boxValues">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z"
                  fill="#FF3B3F"
                />
              </svg>
              <div
                className="optionText"
                style={{ display: "flex", flexDirection: "row" }}
              >
                {wrong}
                <div style={{ padding: "0px 5px", opacity: 0.5026 }}>
                  {" "}
                  Incorrect{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="buttonContainer">

        <button className="bottomButton" onClick={startAgain}>
          Start Again
        </button>
        </div>

      </div>
      </div>
    </div>
  );
}

export default Result;
