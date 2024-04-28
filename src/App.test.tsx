import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("App contains correct heading", () => {
  render(<App />);
  const headingElement = screen.getByText(/learn react/);
  expect(headingElement).toBeInTheDocument();
});