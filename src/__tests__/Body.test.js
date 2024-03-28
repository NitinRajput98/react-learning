// import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Body from "../components/Body";
import MOCK_DATA from "../mocks/bodyMock.json";
import { act } from "react-dom/test-utils";
// import Header from "../components/Header";
// import appStore from "../utils/appStore";
// import App from "../App";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

test("On search of burger text filtered burger cards should be rendered", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  const initialCards = screen.getAllByTestId("resCard");
  expect(initialCards.length).toBe(9);

  const searchBox = screen.getByTestId("searchBox");
  fireEvent.change(searchBox, { target: { value: "burger" } });
  const button = screen.getByTestId("searchBtn");
  fireEvent.click(button);
  const filteredResCards = screen.getAllByTestId("resCard");
  expect(filteredResCards.length).toBe(1);
});

test("On click of top rated rest res cards should be filtered", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  const initialCards = screen.getAllByTestId("resCard");
  expect(initialCards.length).toBe(9);

  const filteredButton = screen.getByTestId("topRatedButton");
  fireEvent.click(filteredButton);
  const filteredResCards = screen.getAllByTestId("resCard");
  expect(filteredResCards.length).toBe(6);
});

// test("Should render username in the header when input field in body is updated", async () => {
//   await act(async () => {
//     render(
//       <Provider store={appStore}>
//         <BrowserRouter>
//           <App />
//           <Body />
//           <Header />
//         </BrowserRouter>
//       </Provider>
//     );
//   });

//   const userNameInput = screen.getByTestId("userNameInput");
//   expect(userNameInput).toBeInTheDocument();

//   fireEvent.change(userNameInput, { target: { value: "Nitin Rajput" } });
//   const userContext = screen.getAllByText("Nitin Rajput");
//   expect(userContext.length).toBe(2);
// });
