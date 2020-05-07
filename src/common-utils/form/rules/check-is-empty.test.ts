/** Imports locaux */
import { checkIsEmpty } from "./checkIsEmpty";

describe("checkIsEmpty", () => {
  it("should return true when string is empty", () => {
    const expected = true;

    expect(checkIsEmpty("")).toBe(expected);
  });

  it("should return true when string only contains space", () => {
    const expected = true;

    expect(checkIsEmpty(" ")).toBe(expected);
    expect(checkIsEmpty("    ")).toBe(expected);
    expect(checkIsEmpty("          ")).toBe(expected);
  });

  it("should return false when string is not empty", () => {
    const expected = false;

    expect(checkIsEmpty("d")).toBe(expected);
    expect(checkIsEmpty("aString")).toBe(expected);
    expect(checkIsEmpty("a string with space")).toBe(expected);
    expect(checkIsEmpty("08543514")).toBe(expected);
    expect(checkIsEmpty("eff fef 545")).toBe(expected);
    expect(checkIsEmpty("   a string with space around    ")).toBe(expected);
  });
});
