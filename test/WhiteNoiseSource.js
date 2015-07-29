import "web-audio-test-api";
import assert from "power-assert";
import sinon from "sinon";
import { BUFSRC, OUTLET } from "../src/symbols";
import WhiteNoiseSource from "../src/WhiteNoiseSource";

describe("WhiteNoiseSource", () => {
  let audioContext;

  beforeEach(() => {
    audioContext = new global.AudioContext();
  });

  describe("constructor(audioContext: AudioContext)", () => {
    it("works", () => {
      let noise = new WhiteNoiseSource(audioContext);

      assert(noise instanceof WhiteNoiseSource);
      assert(noise[BUFSRC] instanceof global.AudioBufferSourceNode);
      assert(noise[BUFSRC].buffer instanceof global.AudioBuffer);
      assert(noise[BUFSRC].loop === true);
      assert(noise[BUFSRC] === noise[OUTLET]);

      let noise2 = new WhiteNoiseSource(audioContext);

      assert(noise[BUFSRC] !== noise2[BUFSRC]);
      assert(noise[BUFSRC].buffer === noise2[BUFSRC].buffer);
      assert([].slice.call(noise[BUFSRC].buffer.getChannelData(0)).some(x => x !== 0));
    });
  });
  describe("#context: AudioContext", () => {
    it("works", () => {
      let noise = new WhiteNoiseSource(audioContext);

      assert(noise.context === audioContext);
    });
  });
  describe("#onended: function", () => {
    it("works", () => {
      let noise = new WhiteNoiseSource(audioContext);
      let onended = sinon.spy();

      noise.onended = onended;

      assert(noise.onended === noise[BUFSRC].onended);
      assert(noise[BUFSRC].onended === onended);
    });
    it("works when disposed", () => {
      let noise = new WhiteNoiseSource(audioContext);
      let onended = sinon.spy();

      noise.dispose();

      assert.doesNotThrow(() => {
        noise.onended = onended;
      });

      assert(noise.onended === null);
    });
  });
  describe("#start(when: number): void", () => {
    it("works", () => {
      let noise = new WhiteNoiseSource(audioContext);

      noise[BUFSRC].start = sinon.spy(noise[BUFSRC].start.bind(noise[BUFSRC]));

      noise.start(1);

      assert(noise[BUFSRC].start.callCount === 1);
      assert(noise[BUFSRC].start.args[0][0] === 1);
    });
    it("works with omitted args", () => {
      let noise = new WhiteNoiseSource(audioContext);

      noise[BUFSRC].start = sinon.spy(noise[BUFSRC].start.bind(noise[BUFSRC]));

      noise.start();

      assert(noise[BUFSRC].start.callCount === 1);
      assert(noise[BUFSRC].start.args[0][0] === 0);
    });
    it("works when disposed", () => {
      let noise = new WhiteNoiseSource(audioContext);

      noise.dispose();

      assert.doesNotThrow(() => {
        noise.start();
      });
    });
  });
  describe("#stop(when: number): void", () => {
    it("works", () => {
      let noise = new WhiteNoiseSource(audioContext);

      noise[BUFSRC].stop = sinon.spy(noise[BUFSRC].stop.bind(noise[BUFSRC]));

      noise.start(1);
      noise.stop(2);

      assert(noise[BUFSRC].stop.callCount === 1);
      assert(noise[BUFSRC].stop.args[0][0] === 2);
    });
    it("works with omitted args", () => {
      let noise = new WhiteNoiseSource(audioContext);

      noise[BUFSRC].stop = sinon.spy(noise[BUFSRC].stop.bind(noise[BUFSRC]));

      noise.start();
      noise.stop();

      assert(noise[BUFSRC].stop.callCount === 1);
      assert(noise[BUFSRC].stop.args[0][0] === 0);
    });
    it("works when disposed", () => {
      let noise = new WhiteNoiseSource(audioContext);

      noise.dispose();

      assert.doesNotThrow(() => {
        noise.stop();
      });
    });
  });
  describe("#connect(...args): void", () => {
    it("works", () => {
      let noise = new WhiteNoiseSource(audioContext);

      noise.connect(audioContext.destination);

      assert(audioContext.destination.$isConnectedFrom(noise[OUTLET]));
    });
  });
  describe("#disconnect(...args): void", () => {
    it("works", () => {
      let noise = new WhiteNoiseSource(audioContext);

      noise.connect(audioContext.destination);
      noise.disconnect();

      assert(!audioContext.destination.$isConnectedFrom(noise[OUTLET]));
    });
    it("works when disposed", () => {
      let noise = new WhiteNoiseSource(audioContext);

      noise.dispose();

      assert.doesNotThrow(() => {
        noise.connect();
      });
    });
  });
  describe("#dispose(): void", () => {
    it("works", () => {
      let noise = new WhiteNoiseSource(audioContext);

      noise.dispose();

      assert(noise[BUFSRC] === null);
      assert(noise[OUTLET] === null);
    });
    it("works when disposed", () => {
      let noise = new WhiteNoiseSource(audioContext);

      noise.dispose();

      assert.doesNotThrow(() => {
        noise.disconnect();
      });
    });
  });
});
