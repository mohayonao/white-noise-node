# WhiteNoiseNode
[![Build Status](http://img.shields.io/travis/mohayonao/white-noise-node.svg?style=flat-square)](https://travis-ci.org/mohayonao/white-noise-node)
[![NPM Version](http://img.shields.io/npm/v/white-noise-node.svg?style=flat-square)](https://www.npmjs.org/package/white-noise-node)
[![License](http://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](http://mohayonao.mit-license.org/)

> WhiteNoise AudioNode for Web Audio API

## Installation

```
npm install white-noise-node
```

downloads:

- [white-noise-node.js](https://raw.githubusercontent.com/mohayonao/white-noise-node/master/build/white-noise-node.js)
- [white-noise-node.min.js](https://raw.githubusercontent.com/mohayonao/white-noise-node/master/build/white-noise-node.min.js)

## API
### PluckNode
- `constructor(audioContext)`

#### Class Methods
- `install(): void`
  - install `createWhiteNoise()` method to `AudioContext.prototype` force

#### Instance Methods
- `start(when: number): void`
- `stop(when: number): void`

## Usage

```js
var noise = new WhiteNoiseNode(audioContext);

noise.start(audioContext.currentTime);
noise.stop(audioContext.currentTime + 4);
```

### Install to AudioContext

At first, call `install()` method.

```js
require("white-noise-node").install();
```

```html
<script src="/path/to/white-noise-node.js"></script>
<script>WhiteNoiseNode.install();</script>
```

Then, you can use `createWhiteNoise()` method at AudioContext.

## Demo

http://mohayonao.github.io/white-noise-node/

## License

MIT
