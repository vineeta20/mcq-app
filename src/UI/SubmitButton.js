import React from "react";
import { Button } from "@mui/material";
import styled from "styled-components";
const Footer = styled.div`
  display: flex;
  justify-content: center;
`;

const SubmitButton = ({ children, clickHandler, disabled }) => {
  return (
    <Footer>
      <Button
        onClick={clickHandler}
        sx={{
          color: "black",
          backgroundColor: "white",
          "&.Mui-checked": {
            color: "black",
            backgroundColor: "white",
          },
        }}
        variant="contained"
        disabled={disabled}
      >
        {children}
      </Button>
    </Footer>
  );
};

export default SubmitButton;
