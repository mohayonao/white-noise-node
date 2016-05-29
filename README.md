# PluckNode
[![Build Status](http://img.shields.io/travis/mohayonao/white-source-node.svg?style=flat-square)](https://travis-ci.org/mohayonao/white-source-node)
[![NPM Version](http://img.shields.io/npm/v/white-source-node.svg?style=flat-square)](https://www.npmjs.org/package/white-source-node)
[![License](http://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](http://mohayonao.mit-license.org/)

> WhiteNoise AudioNode for Web Audio API

## Installation

```
npm install white-source-node
```

downloads:

- [white-source-node.js](https://raw.githubusercontent.com/mohayonao/white-source-node/master/build/white-source-node.js)
- [white-source-node.min.js](https://raw.githubusercontent.com/mohayonao/white-source-node/master/build/white-source-node.min.js)

## API
### PluckNode
- `constructor(audioContext)`

#### Class Methods
- `install(): void`
  - install `createWhiteNoiseSource()` method to `AudioContext.prototype` force

#### Instance Methods
- `start(when: number): void`
- `stop(when: number): void`

## Usage

```js
var noise = new WhiteNoiseSourceNode(audioContext, 1000, 10);

noise.start(audioContext.currentTime);
noise.stop(audioContext.currentTime + 4);
```

### Install to AudioContext

At first, call `install()` method.

```js
require("white-source-node").install();
```

```html
<script src="/path/to/white-source-node.js"></script>
<script>WhiteNoiseSourceNode.install();</script>
```

Then, you can use `createWhiteNoiseSource()` method at AudioContext.

## Demo

http://mohayonao.github.io/white-source-node/

## License

MIT
