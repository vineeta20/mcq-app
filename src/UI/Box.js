import React from "react";
import styled from "styled-components";
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15vh;
`;
const Container = styled.div`
  border: 1px solid teal;
  border-radius: 10px;
  padding: 10px 30px;
  align-content: center;
  color: white;
  background-color: teal;
`;
const Box = (props) => {
  return (
    <Wrapper>
      <Container>{props.children}</Container>
    </Wrapper>
  );
};

export default Box;
