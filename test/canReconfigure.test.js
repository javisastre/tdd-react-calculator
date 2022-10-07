import { describe, it, expect } from "vitest";
import { canReconfigure } from "./../src/canReconfigure";

describe("canReconfigure", () => {
  it("should be a function", () => {
    expect(typeof canReconfigure).toBe("function");
  });
  it("should throw error if first parameter is missing", () => {
    expect(() => canReconfigure()).toThrow();
  });
  it("should throw if first parameter is not a string", () => {
    expect(() => canReconfigure(2)).toThrow();
  });
  it("should throw if second parameter is not a string", () => {
    expect(() => canReconfigure("a", 2)).toThrow();
  });
  it("should return a boolean", () => {
    expect(canReconfigure("a", "b")).toBeTypeOf("boolean");
  });
  it("should return false if strings provided have different lengths", () => {
    expect(canReconfigure("abc", "de")).toBe(false);
  });
  it("should return false if strings provided have different number of unique letters", () => {
    expect(canReconfigure("abc", "ddd")).toBe(false);
  });
  it("should return true if strings have proper order of transformations", () => {
    expect(canReconfigure("LIB", "BAL")).toBe(true);
  });
  it("should return false if strings have different order of transformations", () => {
    expect(canReconfigure("XBOX", "XXBO")).toBe(false);
  });
});
