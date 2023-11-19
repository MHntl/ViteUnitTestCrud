import { afterEach, beforeAll, beforeEach, describe, expect } from "vitest";

//Return FN test
const multiply = (a, b, c) => {
  return a * b * c;
};

//it= test

it("Positive Numbers", () => {
  expect(multiply(10, 2, 3)).toBe(60);
});

//Testleri describe Gruplandırma
describe("Testleri describe ile gruplandırabiliriz", () => {
  //before-after komutları sadece describe içinde çalışır
  beforeAll(() => {
    console.log("test Başlamadan önce birkez çalıştır");
  });
  afterEach(() => {
    console.log("Her testten sonra bunu çalıştır.");
  });
  it("Negative Numbers", () => {
    expect(multiply(-10, -2, -3)).toBe(-60);
  });

  it("Include 0 ", () => {
    expect(multiply(0, 2, 3)).toBe(0);
  });
});
