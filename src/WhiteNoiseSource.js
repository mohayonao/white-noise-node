import createAudioBufferFromArray from "@mohayonao/web-audio-utils/createAudioBufferFromArray";
import NoiseGenerator from "./NoiseGenerator";
import { CONTEXT, BUFSRC, OUTLET } from "./symbols";

let BUFFER = null;

export default class WhiteNoiseSourceNode {
  constructor(audioContext) {
    if (BUFFER === null) {
      BUFFER = createAudioBufferFromArray([ NoiseGenerator.generate(5, audioContext.sampleRate) ], audioContext);
    }

    let bufSrc = audioContext.createBufferSource();

    bufSrc.buffer = BUFFER;
    bufSrc.loop = true;

    this[CONTEXT] = audioContext;
    this[BUFSRC] = bufSrc;
    this[OUTLET] = bufSrc;
  }

  get context() {
    return this[CONTEXT];
  }

  set onended(callback) {
    if (this[BUFSRC]) {
      this[BUFSRC].onended = callback;
    }
  }

  get onended() {
    return this[BUFSRC] ? this[BUFSRC].onended : null;
  }

  start(when = 0) {
    if (this[BUFSRC]) {
      this[BUFSRC].start(when);
    }
  }

  stop(when = 0) {
    if (this[BUFSRC]) {
      this[BUFSRC].stop(when);
    }
  }

  connect(...args) {
    if (this[OUTLET]) {
      this[OUTLET].connect(...args);
    }
  }

  disconnect(...args) {
    if (this[OUTLET]) {
      this[OUTLET].disconnect(...args);
    }
  }

  dispose() {
    this[BUFSRC] = this[OUTLET] = null;
  }
}
