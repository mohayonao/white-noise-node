"use strict";

const assert = require("assert");
const WhiteNoiseNode = require("../lib/WhiteNoiseNode");

describe("WhiteNoiseNode", () => {
  let audioContext;

  beforeEach(() => {
    audioContext = new global.AudioContext();
  });

  describe("constructor(audioContext: global.AudioContext)", () => {
    it("works", () => {
      const node = new WhiteNoiseNode(audioContext);

      assert(node instanceof global.AudioNode);
    });
  });
  describe("#start(when: number): void", () => {
    it("works", () => {
      const node = new WhiteNoiseNode(audioContext);

      assert(typeof node.start === "function");
    });
  });
  describe("#stop(when: number): void", () => {
    it("works", () => {
      const node = new WhiteNoiseNode(audioContext);

      assert(typeof node.stop === "function");
    });
  });
});
