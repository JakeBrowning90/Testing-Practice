import { reverseString } from "./reverseString";

test('return letter string with characters reversed', () => {
  expect(reverseString("apple")).toBe("elppa");
});

test('return number string with characters reversed', () => {
  expect(reverseString("12345")).toBe("54321");
});

test('return string with space with characters reversed', () => {
  expect(reverseString("Race car")).toBe("rac ecaR");
});