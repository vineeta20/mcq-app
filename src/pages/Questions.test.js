import Questions from "./Questions";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

test("land on the questions page on submitting the form", async () => {
  render(
    <BrowserRouter>
      <Questions />
    </BrowserRouter>
  );
});
