"use strict";

const assert = require("assert");
const WhiteNoiseNode = require("..");

const audioContext = new global.AudioContext();
const node = new WhiteNoiseNode(audioContext);

assert(node instanceof global.AudioNode);
assert(typeof node.start === "function");
assert(typeof node.stop === "function");
