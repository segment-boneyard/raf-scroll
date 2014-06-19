var Emitter = require('emitter');
var raf = require('raf-queue');
var emitter = new Emitter();

/**
 * Get the current scroll position
 */

function scrollPosition() {
  if (window.pageYOffset) return window.pageYOffset;
  return (document.documentElement || document.body.parentNode || document.body).scrollTop;
}

/**
 * Emit a scroll event. This will only
 * be called once per frame
 *
 * @param {Event} event
 */

function emit(event) {
  emitter.emit('scroll', event, scrollPosition());
}

/**
 * Every scroll event will emit an event once
 * per frame.
 */

window.addEventListener('scroll', function(){
  raf.once(emit);
}, false);

/**
 * Export the emitter for binding to window
 * scroll events instead of using the window
 * directly.
 */

module.exports = emitter;
