'use strict';

function domGenerator(type, msg) {
  let _wrapper = document.createElement('div');
  let _msg = document.createElement('p');
  _wrapper.className = `__page-console-wrapper __page-console-wrapper-${type}`;
  _wrapper.appendChild(_msg);

  if (typeof msg === 'string') {
    _msg.insertAdjacentText('afterbegin', msg);
  }

  return _wrapper;
}

function index(rawCsl) {
  let bodyElement = document.getElementsByTagName('body')[0];
  let msgDom;

  for (let k in rawCsl) {
    if (typeof rawCsl[k] === 'function') {
      redirect(k);
    }
  }

  function redirect(k) {
    var _copy = console[k];
    console[k] = function(msg) {
      msgDom = domGenerator(k, msg);
      bodyElement.appendChild(msgDom);
      _copy.apply(this, Array.prototype.slice.call(arguments));
    };
  }

  window.addEventListener('error', function() {
    console.log(arguments);
  }, false);
};

module.exports = index;