(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.WhiteNoiseSource = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = require("./lib");

},{"./lib":3}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _noiseGenerator = require("./noiseGenerator");

var _noiseGenerator2 = _interopRequireDefault(_noiseGenerator);

var _symbols = require("./symbols");

var BUFFER = null;

var WhiteNoiseSource = (function () {
  function WhiteNoiseSource(audioContext) {
    _classCallCheck(this, WhiteNoiseSource);

    if (BUFFER === null) {
      BUFFER = _noiseGenerator2["default"].createBuffer(audioContext, 5);
    }

    var bufSrc = audioContext.createBufferSource();

    bufSrc.buffer = BUFFER;
    bufSrc.loop = true;

    this[_symbols.CONTEXT] = audioContext;
    this[_symbols.BUFSRC] = bufSrc;
    this[_symbols.OUTLET] = bufSrc;
  }

  _createClass(WhiteNoiseSource, [{
    key: "start",
    value: function start() {
      var when = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];

      this[_symbols.BUFSRC].start(when);
    }
  }, {
    key: "stop",
    value: function stop() {
      var when = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];

      this[_symbols.BUFSRC].stop(when);
    }
  }, {
    key: "connect",
    value: function connect() {
      var _OUTLET;

      (_OUTLET = this[_symbols.OUTLET]).connect.apply(_OUTLET, arguments);
    }
  }, {
    key: "disconnect",
    value: function disconnect() {
      var _OUTLET2;

      (_OUTLET2 = this[_symbols.OUTLET]).disconnect.apply(_OUTLET2, arguments);
    }
  }, {
    key: "dispose",
    value: function dispose() {
      this[_symbols.BUFSRC] = this[_symbols.OUTLET] = null;
    }
  }, {
    key: "context",
    get: function get() {
      return this[_symbols.CONTEXT];
    }
  }, {
    key: "onended",
    set: function set(callback) {
      this[_symbols.BUFSRC].onended = callback;
    },
    get: function get() {
      return this[_symbols.BUFSRC].onended;
    }
  }]);

  return WhiteNoiseSource;
})();

exports["default"] = WhiteNoiseSource;
module.exports = exports["default"];
},{"./noiseGenerator":4,"./symbols":5}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _WhiteNoiseSource = require("./WhiteNoiseSource");

var _WhiteNoiseSource2 = _interopRequireDefault(_WhiteNoiseSource);

exports["default"] = _WhiteNoiseSource2["default"];
module.exports = exports["default"];
},{"./WhiteNoiseSource":2}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function createBuffer(audioContext, duration) {
  var length = duration * audioContext.sampleRate;
  var buffer = audioContext.createBuffer(1, length, audioContext.sampleRate);

  buffer.getChannelData(0).set(generate(length));

  return buffer;
}

function generate(length) {
  var noise = new Float32Array(length);

  for (var i = 0; i < length; i++) {
    noise[i] = Math.random() * 2 - 1;
  }

  return noise;
}

exports["default"] = { generate: generate, createBuffer: createBuffer };
module.exports = exports["default"];
},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var CONTEXT = typeof Symbol !== "undefined" ? Symbol("CONTEXT") : "@mohayonao/white-noise-generator:CONTEXT";
exports.CONTEXT = CONTEXT;
var BUFSRC = typeof Symbol !== "undefined" ? Symbol("BUFSRC") : "@mohayonao/white-noise-generator:BUFSRC";
exports.BUFSRC = BUFSRC;
var OUTLET = typeof Symbol !== "undefined" ? Symbol("OUTLET") : "@mohayonao/white-noise-generator:OUTLET";
exports.OUTLET = OUTLET;
},{}]},{},[1])(1)
});