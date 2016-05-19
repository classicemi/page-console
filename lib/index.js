'use strict';

function render(type, msg) {
  let _wrapper = document.createElement('div');
  let _msg = document.createElement('p');
  _wrapper.className = `__page-console-wrapper __page-console-wrapper-${type}`;
  _wrapper.appendChild(_msg);

  if (typeof msg === 'string') {
    _msg.insertAdjacentText('afterbegin', msg);
  }

  return _wrapper;
}

let bodyElement = document.getElementsByTagName('body')[0];
let style = `
.__page-console-wrapper {
  position: absolute;
  top: 5px;
  bottom: 5px;
  right: 5px;
  width: 280px;
  padding: 10px;
}

.__page-console-wrapper-normal {
  background: rgba(169, 222, 111, 1);
}

.__page-console-wrapper p {
  margin: 0;
}
`;

function insertStyle(style) {
  var styleNode = document.createElement('style');
  var styleTextNode = document.createTextNode(style);
  styleNode.rel = 'stylesheet/css';
  styleNode.appendChild(styleTextNode);
  bodyElement.appendChild(styleNode);
}

insertStyle(style);

function index(rawCsl) {
  let msgDom;

  for (let k in rawCsl) {
    if (typeof rawCsl[k] === 'function') {
      redirect(k);
    }
  }

  function redirect(k) {
    var _copy = console[k];
    console[k] = function(msg) {
      var msgDom = render(k === 'error' ? 'error' : 'normal', msg);
      bodyElement.appendChild(msgDom);
      _copy.apply(this, Array.prototype.slice.call(arguments));
    };
  }

  window.addEventListener('error', function() {
    console.log(arguments);
  }, false);
};

module.exports = index;