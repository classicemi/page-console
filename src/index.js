import style from './style';
import Wrapper from './Wrapper';

let bodyElement = document.getElementsByTagName('body')[0];
function insertStyle(style) {
  var styleNode = document.createElement('style');
  var styleTextNode = document.createTextNode(style);
  styleNode.rel = 'stylesheet/css';
  styleNode.appendChild(styleTextNode);
  bodyElement.appendChild(styleNode);
}
insertStyle(style);

export default function(rawCsl) {
  let msgDom;
  let wrapper = new Wrapper();
  bodyElement.appendChild(wrapper.node);
  console.log(wrapper);

  for (let k in rawCsl) {
    if (typeof rawCsl[k] === 'function') {
      redirect(k);
    }
  }

  function redirect(k) {
    var _copy = rawCsl[k];
    rawCsl[k] = function(msg) {
      if (!wrapper.isShow) {
        wrapper.show();
      }
      wrapper.appendItem(msg);
      _copy.apply(this, Array.prototype.slice.call(arguments));
    };
  }

  window.addEventListener('error', function() {
    console.log(arguments);
  }, false);
};
