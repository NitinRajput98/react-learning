import { sum } from "../components/Sum";

test("Sum function should return sum of two numbers", () => {
  const result = sum(2, 2);
  //Assertion
  expect(result).toBe(5);
});
