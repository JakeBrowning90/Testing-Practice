import { reverseString } from "./reverseString";

test('return string with characters reversed', () => {
  expect(reverseString("apple")).toBe("elppa");
});

test('return string with characters reversed', () => {
  expect(reverseString("12345")).toBe("54321");
});

test('return string with characters reversed', () => {
  expect(reverseString("Race car")).toBe("rac ecaR");
});