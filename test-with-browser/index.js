import assert from "power-assert";
import WhiteNoiseSource from "../src";

describe("WhiteNoiseSource", () => {
  let guradGC = [];

  it("works", (done) => {
    let audioContext = new AudioContext();
    let noise = new WhiteNoiseSource(audioContext);
    let capture = audioContext.createScriptProcessor(512, 1, 1);

    noise.start(0.2);
    noise.stop(0.6);
    noise.onended = () => {
      noise.onended.callCount += 1;
    };
    noise.onended.callCount = 0;

    noise.connect(capture);
    capture.connect(audioContext.destination);

    capture.onaudioprocess = ({ playbackTime, inputBuffer }) => {
      let buf = [].slice.call(inputBuffer.getChannelData(0));

      if (0.0 <= playbackTime && playbackTime < 0.1) {
        assert(buf.every(x => x === 0));
      }
      if (0.3 <= playbackTime && playbackTime < 0.5) {
        assert(buf.some(x => x !== 0));
      }
      if (0.7 <= playbackTime && playbackTime < 0.9) {
        assert(buf.every(x => x === 0));
      }
      if (1.0 <= playbackTime) {
        assert(noise.onended.callCount === 1);
        done();
      }
    };

    guradGC.push(noise, capture);
  });
  it("works with OfflineAudioContext", (done) => {
    let audioContext = new OfflineAudioContext(1, 48000 * 1, 48000);
    let noise = new WhiteNoiseSource(audioContext);

    noise.start(0.2);
    noise.stop(0.6);

    noise.connect(audioContext.destination);

    audioContext.oncomplete = ({ renderedBuffer }) => {
      let buf = [].slice.call(renderedBuffer.getChannelData(0));

      assert(buf.slice(48000 * 0.0, 48000 * 0.1).every(x => x === 0));
      assert(buf.slice(48000 * 0.3, 48000 * 0.5).some(x => x !== 0));
      assert(buf.slice(48000 * 0.7, 48000 * 0.9).every(x => x === 0));

      done();
    };

    audioContext.startRendering();

    guradGC.push(audioContext);
  });
});
