import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Box from "../UI/Box";
import { questions } from "../data";
import SubmitButton from "../UI/SubmitButton";
import { useNavigate } from "react-router-dom";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { selectedOptionAction } from "../store/selectedOption";

const TopTabs = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
const Tab = styled.button`
  padding: 10px 15px;
  margin: 10px;
  cursor: pointer;
  border-radius: 50px;
  border-color: black;
`;
const QuestionTab = styled.div`
  margin: 20px;
  background-color: black;
  color: white;
`;
const QuestionHeading = styled.div`
  width: 500px;
  margin: 10px 20px;
  padding: 10px 20px;
`;
const Answers = styled.form`
  margin: 20px 0;
  margin: 10px 20px;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
`;

const Questions = ({ language }) => {
  const navigate = useNavigate();

  const numberOfQuestions = questions[language].map((ques) => ques.questionid);

  const [selectedQue, setSelectedQue] = useState(numberOfQuestions[0]);
  const [inputValue, setInputValue] = useState("");
  const col = useSelector((state) => state.selectedOption.data);
  const [checkedIn, setCheckedIn] = useState([]);
  const selectQuestionHandler = (number) => {
    setSelectedQue(number);
  };
  const submitHandler = () => {
    if (selectedQue < numberOfQuestions.length) {
      setSelectedQue((prev) => {
        return prev + 1;
      });
    }
    if (selectedQue === numberOfQuestions.length) {
      navigate("/result");
    }
  };
  const dispatch = useDispatch();

  const question = questions[language][selectedQue - 1];
  const changeHandler = (e) => {
    setInputValue(e.target.value);
    console.log(e.target.value);
    if (question.correctAns === e.target.value) {
      dispatch(
        selectedOptionAction.changeStatus({ ans: true, number: selectedQue })
      );
    } else
      dispatch(
        selectedOptionAction.changeStatus({ ans: false, number: selectedQue })
      );
  };
  const changeCheckHandler = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setCheckedIn((prev) => {
        return [...prev, value];
      });
    } else {
      setCheckedIn((prev) => {
        return prev.filter((x) => x !== value);
      });
    }
  };
  useEffect(() => {
    console.log(checkedIn);
    let isCorrect;
    if (checkedIn.length !== 0) {
      if (question.correctAns.length === checkedIn.length) {
        question.correctAns.every((ans) => {
          isCorrect = checkedIn.includes(ans);
          if (!isCorrect) {
            dispatch(
              selectedOptionAction.changeStatus({
                ans: false,
                number: selectedQue,
              })
            );
            return false;
          }
          return true;
        });
        if (isCorrect) {
          dispatch(
            selectedOptionAction.changeStatus({
              ans: true,
              number: selectedQue,
            })
          );
        }
      } else
        dispatch(
          selectedOptionAction.changeStatus({ ans: false, number: selectedQue })
        );
    }
  }, [checkedIn, dispatch, question, selectedQue]);

  return (
    <>
      <Navbar />
      <Box>
        <TopTabs>
          {numberOfQuestions.map((number) => {
            return (
              <Tab
                style={{
                  backgroundColor: col[number - 1].color,
                }}
                onClick={() => {
                  selectQuestionHandler(number);
                }}
                key={number}
              >
                {number}
              </Tab>
            );
          })}
        </TopTabs>
        <QuestionTab>
          <QuestionHeading>
            Q. {question.question}
            {question.matchoptions &&
              question.matchoptions.map((opt) => (
                <QuestionHeading key={opt}>{opt}</QuestionHeading>
              ))}
          </QuestionHeading>

          <Answers>
            <FormControl>
              <RadioGroup
                name="controlled-radio-buttons-group"
                value={inputValue}
                onChange={changeHandler}
              >
                {question.questiontype === "radio" &&
                  question.questionoption.map((option) => (
                    <FormControlLabel
                      key={option.optionid}
                      value={option.optionvalue}
                      control={
                        <Radio
                          sx={{
                            color: "white",
                            "&.Mui-checked": {
                              color: "white",
                            },
                          }}
                        />
                      }
                      label={option.optionvalue}
                    />
                  ))}
                <FormGroup>
                  {question.questiontype === "checkbox" &&
                    question.questionoption.map((option) => (
                      <FormControlLabel
                        key={option.optionid}
                        control={
                          <Checkbox
                            sx={{
                              color: "white",
                              "&.Mui-checked": {
                                color: "white",
                              },
                            }}
                            name="checkbox"
                          />
                        }
                        onChange={changeCheckHandler}
                        value={option.optionvalue}
                        label={option.optionvalue}
                      />
                    ))}
                </FormGroup>
              </RadioGroup>
            </FormControl>
          </Answers>
        </QuestionTab>
        <SubmitButton clickHandler={submitHandler}>Submit</SubmitButton>
        <br />
        <p>
          *According the problem given, all answered questions are shown in red
          and unanswered in gray.
        </p>
      </Box>
    </>
  );
};

export default Questions;
