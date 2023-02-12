import { calculator } from "./calculator";

test('adds 4 + 5 to equal 9', () => {
  expect(calculator.add(4, 5)).toBe(9);
});

test('subtract 4 - 5 to equal -1', () => {
  expect(calculator.subtract(4, 5)).toBe(-1);
});

test('divide 4 / 5 to equal 0.8', () => {
  expect(calculator.divide(4, 5)).toBe(0.8);
});

test('multiply 4 * 5 to equal 20', () => {
  expect(calculator.multiply(4, 5)).toBe(20);
});