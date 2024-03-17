import { render, screen } from "@testing-library/react";
import Contact from "../components/Contact";
import "@testing-library/jest-dom";

describe("Contact component test cases", () => {
  test("Heading component shoulde load on screen", () => {
    render(<Contact />);
    //Querying
    const heading = screen.getByRole("heading");
    //Assertion
    expect(heading).toBeInTheDocument();
  });

  test("Submit button should load on screen", () => {
    render(<Contact />);
    //Querying
    const button = screen.getByText("Submit");
    //Assertion
    expect(button).toBeInTheDocument();
  });

  test("2 input fields should load on screen", () => {
    render(<Contact />);
    //Querying
    const inputFields = screen.getAllByRole("textbox");
    //Assertion
    expect(inputFields.length).toBe(3);
  });
});
