import assert from "power-assert";
import index from "../src";
import WhiteNoiseSource from "../src/WhiteNoiseSource";

describe("index", () => {
  it("exports", () => {
    assert(index === WhiteNoiseSource);
  });
});
