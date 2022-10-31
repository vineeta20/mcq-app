import React from "react";
import { Chart } from "react-google-charts";
import { useSelector } from "react-redux";

const Piechart = () => {
  const storedData = useSelector((state) => state.selectedOption.data);
  let result = storedData.map((data) => data.status);

  const count = {};

  for (const element of result) {
    if (count[element]) {
      count[element] += 1;
    } else {
      count[element] = 1;
    }
  }
  const data = [
    ["Answer Status", "Number of answers"],
    ["unanswered", count.unanswered],
    ["correct", count.correct],
    ["incorrect", count.incorrect],
  ];
  const options = {
    title: "My result in pie chart:",
  };
  return (
    <>
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width={"100%"}
        height={"400px"}
      />
    </>
  );
};

export default Piechart;
