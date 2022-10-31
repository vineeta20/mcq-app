import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import {
  RadioGroup,
  FormLabel,
  FormControlLabel,
  FormControl,
  Radio,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Box from "../UI/Box";
import SubmitButton from "../UI/SubmitButton";

const Head = styled.div`
  margin-bottom: 30px;
`;
const Label = styled.label`
  color: white;
  display: block;
`;
const Input = styled.input`
  margin-top: 5px;
  width: 300px;
  height: 20px;
`;

const Body = styled.div`
  margin-bottom: 30px;
`;

const Home = ({ setLanguage, language }) => {
  const navigate = useNavigate();
  const submitHandler = () => {
    navigate("/questions");
  };

  const [name, setName] = useState("");
  const [gender, setgender] = useState(null);

  const inputHandler = (e) => {
    setName(e.target.value);
  };

  const changeHandler = (e) => {
    const selected = e.target.value;
    if (selected === "male" || selected === "female") {
      setgender(selected);
    } else {
      setLanguage(selected);
    }
  };

  return (
    <>
      <Navbar />
      <Box>
        <Head>
          <Label htmlFor="name">Enter your full name: </Label>
          <Input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={inputHandler}
          />
        </Head>
        <Body>
          <FormControl>
            <FormLabel
              id="demo-radio-buttons-group-label"
              sx={{
                color: "white",
                "&.Mui-checked": {
                  color: "white",
                },
              }}
            >
              Gender
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              name="radio-buttons-group"
              value={gender}
              onChange={changeHandler}
            >
              <FormControlLabel
                value="female"
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
                label="Female"
              />
              <FormControlLabel
                value="male"
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
                label="Male"
              />
              <FormControlLabel
                value="other"
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
                label="Other"
              />
            </RadioGroup>
          </FormControl>
        </Body>
        <Body>
          <FormControl>
            <FormLabel
              id="demo-radio-buttons-group-label"
              sx={{
                color: "white",
                "&.Mui-checked": {
                  color: "white",
                },
              }}
            >
              Language Preference
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="english"
              name="radio-buttons-group"
              value={language}
              onChange={changeHandler}
            >
              <FormControlLabel
                value="english"
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
                label="English"
              />
              <FormControlLabel
                value="hindi"
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
                label="Hindi"
              />
            </RadioGroup>
          </FormControl>
        </Body>
        <SubmitButton
          disabled={name.length < 2 || gender === null || language === null}
          clickHandler={submitHandler}
        >
          Submit
        </SubmitButton>
      </Box>
    </>
  );
};

export default Home;
