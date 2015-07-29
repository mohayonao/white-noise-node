function createBuffer(audioContext, duration) {
  let length = duration * audioContext.sampleRate;
  let buffer = audioContext.createBuffer(1, length, audioContext.sampleRate);

  buffer.getChannelData(0).set(generate(length));

  return buffer;
}

function generate(length) {
  let noise = new Float32Array(length);

  for (let i = 0; i < length; i++) {
    noise[i] = Math.random() * 2 - 1;
  }

  return noise;
}

export default { generate, createBuffer };
