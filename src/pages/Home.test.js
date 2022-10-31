import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Home from "./Home";
import { BrowserRouter } from "react-router-dom";

test("land on the questions page on submitting the form", async () => {
  const user = userEvent.setup();
  render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );

  //initially button being disabled.
  const submitButton = screen.getByRole("button", { name: "Submit" });
  expect(submitButton).toBeDisabled();

  //after filling the form, land on questions page.
  fireEvent.change(screen.getByLabelText(/enter your full name/i), {
    target: { value: "vin" },
  });

  await user.click(screen.getByRole("radio", { name: /female/i }));
  await user.click(screen.getByRole("radio", { name: /english/i }));
  await user.click(submitButton);
  global.window = { location: { pathname: null } };
  expect(global.window.location.pathname).toContain("/questions");
});
