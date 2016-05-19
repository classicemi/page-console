import { domGenerator } from './dom';

export default function(rawCsl) {
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
