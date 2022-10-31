import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import Piechart from "../components/PieChart";
import Box from "../UI/Box";
const Result = () => {
  const result = useSelector((state) => state.selectedOption.data);
  return (
    <>
      <Navbar />
      <Box>
        Result:
        {result.map((res) => (
          <p key={res.number}>
            {res.number} : {res.status}
          </p>
        ))}
      </Box>
      <Piechart />
    </>
  );
};

export default Result;
