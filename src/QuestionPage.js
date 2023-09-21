import logo from "./logo.svg";
import "./App.css";
import topImage from "./topImage.png";

import React, { useEffect, useState, useRef } from "react";
import { Router, useNavigate, json } from "react-router-dom";

function QuestionPage() {
  let [questions, setQuestions] = useState([]);
  let [number, setnumber] = useState(0);
  let [answers, setAnswers] = useState([]);
  let counter = useRef(0); // counter to maintain the timer for each question
  let [answerNo, setAnswerNo] = useState([]);

  let [loaded, setLoaded] = useState(-1);

  useEffect(() => {
    // api call to get the questions and options for solutions
    fetch('https://api.jsonbin.io/v3/b/650b137bce39bb6dce7f8f85', {
      method: 'GET',
      headers: {
        'X-MASTER-KEY': '$2a$10$PTXt0.vIO/KoVhGpKCLmDu.W.sBd2B1OmEeJFgA2im8vxjszSBafu',
        'X-RapidAPI-Host': 'famous-quotes4.p.rapidapi.com',
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data && data.record && data.record.values){
        setQuestions(data.record.values);}

      })
      .catch((err) => {
      });
  }, []);
  useEffect(() => {
    setInterval(function () {
      counter.current = counter.current + 1;
    }, 1000);
  }, []);
  let optionSelection = (index, id) => {
    setAnswerNo((prev) => {
      if (answerNo.includes(index)) {
        let arr = prev;
        let pos = answerNo.indexOf(index);
        let arr1 = arr.toSpliced(pos, 1);
        return arr1;
      } else {
        let arr = prev.concat([index]);
        return arr;
      }
    });
    setAnswers((prev) => {
      if (answers.includes(id)) {
        let arr = prev;
        let pos = answers.indexOf(id);
        let arr1 = arr.toSpliced(pos, 1);
        return arr1;
      } else {
        let arr = prev.concat([id]);
        return arr;
      }
    });
  };
  const navigate = useNavigate();

  useEffect(() => {
    // function for animaion
    const circularProgress = document.querySelectorAll(".circular-progress");
    Array.from(circularProgress).forEach((progressBar) => {
      const progressValue = progressBar.querySelector(".percentage");
      const innerCircle = progressBar.querySelector(".inner-circle");
      let startValue = 0,
        endValue = Number(progressBar.getAttribute("data-percentage")),
        speed = 50,
        progressColor = progressBar.getAttribute("data-progress-color");

      const progress = setInterval(() => {
        startValue++;
        progressValue.textContent = `${startValue}%`;
        progressValue.style.color = `${progressColor}`;

        innerCircle.style.backgroundColor = `${progressBar.getAttribute(
          "data-inner-circle-color"
        )}`;

        progressBar.style.background = `conic-gradient(${progressColor} ${
          startValue * 3.6
        }deg,${progressBar.getAttribute("data-bg-color")} 0deg)`;
        if (startValue === endValue) {
          clearInterval(progress);
        }
      }, speed);
    });
  }, [loaded]);
// submission contains all the values that needs to be sent to the api on next button click

  let submission = {};
  let nextButton = (qid) => {
     
      if (answerNo.length > 0) {
        submission.time = counter.current;
        submission.qid = qid;
        submission.asnwerIdArr = answers;

         
        
        fetch('https://api.jsonbin.io/v3/b/650b16d3ce39bb6dce7f90e6', {
          method: "PUT",
          body: JSON.stringify({
            submission
          }),
          headers: {
            'X-MASTER-KEY': '$2a$10$PTXt0.vIO/KoVhGpKCLmDu.W.sBd2B1OmEeJFgA2im8vxjszSBafu',
            "Content-type": "application/json; charset=UTF-8"

          },
        
      })
       
      .then(response => response.json())
      .then((data)=>{
        setAnswers((_) => []);
        setAnswerNo((_) => []);
        counter.current = 0;
        if (number == questions.length - 1) {
          navigate("/result");
        }
        else{
          setnumber((prev) => prev + 1);

        }

      })
      .catch(err=>{
        console.log("error in submiting the submission")
      })


      
      }
    
  };

  return (
    <div>
      <div className="topbar">
        <img src={topImage}/>
      </div>

      {
      ( questions.length == 0) ? (
        <div style={{margin:"100% 0 0 0", fontWeight:800, fontSize:"25px"}}>Loading . . . </div>
        ) : (
        <div className="optionBox">
          <div className="content-container">
          <div className="quiz-heading-ques" key={number}>
            <div
              className="circular-progress"
              onLoad={
                loaded == number
                  ? console.log("loaded")
                  : setLoaded((_) => number)
              }
              data-inner-circle-color="white"
              data-percentage={Math.floor(
                ((number + 1) * 100) / questions.length
              )}
              data-progress-color="green"
              data-bg-color="#F3F4FA"
            >
              <div className="inner-circle"></div>
              <p className="percentage">0%</p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  fontWeight: "900",
                  textAlign: "center",
                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <p style={{ fontSize: "30px", zIndex: 10 }}>{number + 1} </p>
                <p
                  style={{
                    textAlign: "end",
                    padding: "26px 0px 0px 0px",
                    opacity: 0.796,
                  }}
                >
                  /{questions.length}
                </p>
              </div>
            </div>
          </div>

          <div className="question">
            <div style={{width:"100%"}}>
              <div>{questions[number].question}</div>
              {questions[number].image == "" ? (
                <div />
              ) : (
                <div className="imageBlock">
                  <img src={questions[number].image} alt="Image" />{" "}
                </div>
              )}{" "}
            </div>
          </div>

          <div className="optionListValues">
            {questions[number].options.map((val, index) => {
              let isSeletecd = answerNo.includes(index);
              return (
                <div
                  className="optionValue"
                  style={{ border: isSeletecd ? "4.444px solid #44B77B" : "" }}
                  onClick={(_) => optionSelection(index, val.id)}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      padding: "0px 0px 0px 10px",
                    }}
                  >
                    {!isSeletecd ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        viewBox="0 0 48 48"
                        fill="none"
                      >
                        <path
                          opacity="0.0829846"
                          d="M46 24C46 36.1503 36.1503 46 24 46C11.8497 46 2 36.1503 2 24C2 11.8497 11.8497 2 24 2C36.1503 2 46 11.8497 46 24Z"
                          stroke="black"
                          strokeWidth="4"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        viewBox="0 0 48 48"
                        fill="none"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24ZM37.3137 14.3431L39.435 16.4645L25.2929 30.6066L22.4645 33.435L19.636 30.6066L12.565 23.5355L14.6863 21.4142L22.38 28.0821L37.3137 14.3431Z"
                          fill="#44B77B"
                        />
                      </svg>
                    )}
                    <div className="optionText">{val.value}</div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="buttonContainer">
            <button
              className="bottomButton"
              onClick={(_) => nextButton(questions[number].qId)}
              style={{ opacity: answerNo.length>0?"1": "0.2"}}
            >
              Next
            </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default QuestionPage;
