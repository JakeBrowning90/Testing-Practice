import { capitalize } from "./capitalize";

test('return string with character capitalized', () => {
  expect(capitalize("apple")).toBe("Apple");
});

test('return single letter as a capital', () => {
  expect(capitalize("b")).toBe("B");
});

test('return string that does not start with a letter unchanged', () => {
  expect(capitalize("21 Jump Street")).toBe("21 Jump Street");
});