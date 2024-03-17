import { Provider } from "react-redux";
import Header from "../components/Header";
import appStore from "../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

test("Should render header component with a login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByText(/Login/);
  expect(loginButton).toBeInTheDocument();
});

test("Should render header component with a Cart items 0", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cart = screen.getByText(/Cart/);
  expect(cart).toBeInTheDocument();
});

test("Should change login button to logout on Click", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByText(/Login/);
  fireEvent.click(loginButton);
  const logoutButton = screen.getByText(/Logout/);
  //   const logoutButton = screen.getByRole("button", { name: "Logout" });
  expect(logoutButton).toBeInTheDocument();
});
