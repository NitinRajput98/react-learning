import { Provider } from "react-redux";
import Header from "../components/Header";
import Cart from "../components/Cart";
import appStore from "../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MOCK_DATA from "../mocks/resMenuMock.json";
import RestaturantMenu from "../components/RestaurantMenu";
import { act } from "react-dom/test-utils";

global.fetch = jest.fn(() =>
  Promise.resolve({ json: () => Promise.resolve(MOCK_DATA) })
);

test("Should load restaturant menu component", async () => {
  await act(async () => {
    render(<RestaturantMenu />);
  });

  const resMenu = screen.getByTestId("resMenu");

  expect(resMenu).toBeInTheDocument();
});

test("Should load restaturant category component", async () => {
  await act(async () => {
    render(<RestaturantMenu />);
  });

  const resCategory = screen.getAllByTestId("resCategory");

  expect(resCategory[0]).toBeInTheDocument();
});

test("Should load listItem onClick of resCategory component", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <RestaturantMenu />
        </Provider>
      </BrowserRouter>
    );
  });

  const resCategory = screen.getAllByTestId("resCategory");
  expect(resCategory.length).toBe(15);

  fireEvent.click(resCategory[0]);

  const listItems = screen.getAllByTestId("itemList");
  expect(listItems.length).toBe(20);
});

//Adding item from menu item and checking did the state got updated in header and cart page
test("Should update items on click of add item", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaturantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    );
  });
  expect(screen.getByText("Cart - 0")).toBeInTheDocument();
  const resCategory = screen.getAllByTestId("resCategory");
  expect(resCategory.length).toBe(15);

  fireEvent.click(resCategory[0]);

  const listItems = screen.getAllByTestId("itemList");
  expect(listItems.length).toBe(20);

  const addButton = screen.getAllByTestId("addBtn");
  fireEvent.click(addButton[0]);
  //Item added in cart inside header
  expect(screen.getByText("Cart - 1")).toBeInTheDocument();
  //Checking added item in cart page
  expect(screen.getAllByText("Veg Chilli Momo").length).toBe(2);
  const clearBtn = screen.getByTestId("clearCartBtn");
  fireEvent.click(clearBtn);
  expect(
    screen.getByText("Cart is empty.Pls add some items!!")
  ).toBeInTheDocument();
});
