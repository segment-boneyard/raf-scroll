# raf-scroll

An emitter for binding to window scroll events that will only ever fire once per frame using `requestAnimationFrame`. Intended to replace binding to the window event directly.

```js
var scroll = require('raf-scroll');

scroll.on('scroll', function log(event, position){
  console.log('boo!');
});

scroll.off('scroll', log);
```

## Install

```
component install segmentio/raf-scroll
```