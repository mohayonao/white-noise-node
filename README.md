# WhiteNoiseSourceNode
[![Build Status](http://img.shields.io/travis/mohayonao/white-noise-source.svg?style=flat-square)](https://travis-ci.org/mohayonao/white-noise-source)
[![NPM Version](http://img.shields.io/npm/v/white-noise-source.svg?style=flat-square)](https://www.npmjs.org/package/white-noise-source)
[![License](http://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](http://mohayonao.mit-license.org/)

> WhiteNoise AudioNode for Web Audio API

## Installation

```
npm install white-noise-source
```

downloads:

- [white-noise-source.js](https://raw.githubusercontent.com/mohayonao/white-noise-source/master/build/white-noise-source.js)
- [white-noise-source.min.js](https://raw.githubusercontent.com/mohayonao/white-noise-source/master/build/white-noise-source.min.js)

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
require("white-noise-source").install();
```

```html
<script src="/path/to/white-noise-source.js"></script>
<script>WhiteNoiseSourceNode.install();</script>
```

Then, you can use `createWhiteNoiseSource()` method at AudioContext.

## Demo

http://mohayonao.github.io/white-noise-source/

## License

MIT
