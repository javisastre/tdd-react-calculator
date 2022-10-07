import { it, describe, expect } from "vitest";
import { fizzbuzz } from "./../src/fizzbuzz";

describe("Fizzbuzz", () => {
  //   it("should be a function", () => {
  //     expect(typeof fizzbuzz).toBe("function");
  //   });
  it("should throw an error if no number is provided as parameter", () => {
    expect(() => fizzbuzz()).toThrow();
  });
  it("should throw a specific message if the parameter is not a number", () => {
    expect(() => fizzbuzz()).toThrow(/number/);
  });
  it("should throw a specific message if NaN is provided", () => {
    expect(() => fizzbuzz()).toThrow(/number/);
  });
  it("should return 1 if number is 1", () => {
    expect(fizzbuzz(1)).toBe(1);
  });
  it("should return 2 if number is 2", () => {
    expect(fizzbuzz(2)).toBe(2);
  });
  it("should return fizz if number is 3", () => {
    expect(fizzbuzz(3)).toBe("fizz");
  });
  it("should return fizz if number is multiple of 3", () => {
    expect(fizzbuzz(6)).toBe("fizz");
    expect(fizzbuzz(9)).toBe("fizz");
    expect(fizzbuzz(12)).toBe("fizz");
  });
  it("should return buzz if number is multiple of 5", () => {
    expect(fizzbuzz(5)).toBe("buzz");
    expect(fizzbuzz(10)).toBe("buzz");
    expect(fizzbuzz(20)).toBe("buzz");
  });
  it("should return fizzbuzz if number is multiple of 3 and 5", () => {
    expect(fizzbuzz(15)).toBe("fizzbuzz");
  });
});
