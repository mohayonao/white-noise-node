var noiseData = new Float32Array(44100 * 5);
var noiseBuffer = null;

for (var i = 0, imax = noiseData.length; i < imax; i++) {
  noiseData[i] = Math.random() * 2 - 1;
}

function WhiteNoiseNode(audioContext) {
  if (noiseBuffer === null) {
    noiseBuffer = audioContext.createBuffer(1, noiseData.length, audioContext.sampleRate);
    noiseBuffer.getChannelData(0).set(noiseData);
  }
  var bufferSource = audioContext.createBufferSource();

  bufferSource.buffer = noiseBuffer;
  bufferSource.loop = true;

  return bufferSource;
}

WhiteNoiseNode.install = function() {
  Object.defineProperty(AudioContext.prototype, "createWhiteNoise", {
    value: function() {
      return new WhiteNoiseNode(this);
    },
    enumerable: false, writable: false, configurable: true
  });
};

module.exports = WhiteNoiseNode;
