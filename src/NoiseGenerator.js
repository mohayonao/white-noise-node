export default {
  generate(duration, sampleRate) {
    let noise = new Float32Array(duration * sampleRate);

    for (let i = 0, imax = noise.length; i < imax; i++) {
      noise[i] = Math.random() * 2 - 1;
    }

    return noise;
  },
};
