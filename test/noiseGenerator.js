import "web-audio-test-api";
import assert from "power-assert";
import noiseGenerator from "../src/noiseGenerator";

describe("noiseGenerator", () => {
  describe(".createBuffer(audioContext: AudioContext, duration: number): AudioBuffer", () => {
    it("works", () => {
      let audioContext = new global.AudioContext();
      let buffer = noiseGenerator.createBuffer(audioContext, 0.05);

      assert(buffer instanceof global.AudioBuffer);
      assert(buffer.sampleRate === audioContext.sampleRate);
      assert(buffer.duration === 0.05);
      assert([].slice.call(buffer.getChannelData(0)).some(x => x !== 0));
    });
  });
  describe(".generate(length: number): Float32Array", () => {
    it("works", () => {
      let noise = noiseGenerator.generate(256);

      assert(noise instanceof Float32Array);
      assert(noise.length === 256);
      assert([].slice.call(noise).some(x => x !== 0));
    });
  });
});
