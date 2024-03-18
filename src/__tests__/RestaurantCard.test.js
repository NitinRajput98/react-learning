import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import resMockData from "../mocks/resCardMock.json";
import RestaurantCard from "../components/RestaurantCard";
import HigherOrderComponent from "../components/HigherOrderComponent";

test("Should render restaurant card component with props data", () => {
  render(<RestaurantCard restData={resMockData} />);
  const resCard = screen.getByText("Domino's Pizza");
  expect(resCard).toBeInTheDocument();
});

test("Should render resturant card component with newlyaddedlabel", () => {
  const NewlyOnboardedComponent = HigherOrderComponent(RestaurantCard);
  render(<NewlyOnboardedComponent restData={resMockData} />);
  const newlyOnboardedCard = screen.getByText("Newly Onboarded");
  expect(newlyOnboardedCard).toBeInTheDocument();
});
