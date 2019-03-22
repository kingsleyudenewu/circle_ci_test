const sum = require("../sketch");

test("Add sum of two numbers", () => {
  expect(sum(1, 2)).toBe(3);
});
