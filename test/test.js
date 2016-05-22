(function () {
  'use strict';

  let style = `
.__page-console-wrapper {
  position: absolute;
  top: 5px;
  bottom: 5px;
  right: 5px;
  width: 280px;
  padding: 26px 10px 10px;
  background: rgba(228, 223, 184, 1);
  border-radius: 6px;
  box-shadow: 0 0 6px #ccc;
  z-index: 999999;
}

.__page-console-wrapper p,
.__page-console-wrapper ul {
  margin: 0;
  padding: 0;
}

.__page-console-wrapper li {
  margin-bottom: 5px;
  padding: 5px;
  width: 100%;
  list-style: none;
  box-sizing: border-box;
  border: 1px solid rgba(185, 181, 151, 0);
  transition: all .3s;
  font-family: Menlo, Consolas, "Courier New", Courier, FreeMono, monospace;
  font-size: 12px;
  color: #444;
}
.__page-console-wrapper li:hover {
  border-radius: 6px;
  border: 1px solid rgba(185, 181, 151, .4);
  background-color: rgba(185, 181, 151, .4);
}

.__page-console-close {
  position: absolute;
  right: 5px;
  top: 5px;
}
.__page-console-close:after {
  content: 'x';
  font-family: Consolas, "Courier New", Courier, FreeMono, monospace;
}
`;

  function consoleDOMGenerator(obj) {
    let p = document.createElement('p');
    if (typeof obj === 'string' || typeof obj === 'number') {
      p.appendChild(document.createTextNode(obj))
    }
    return p;
  };

  function generateList(list) {
    let fragment = document.createDocumentFragment();
    list.forEach(item => {
      let li = document.createElement('li');
      li.appendChild(consoleDOMGenerator(item));
      fragment.appendChild(li);
    });
    return fragment;
  }

  class Wrapper {
    constructor() {
      this.content = [];
      let node = document.createElement('div');

      // close button
      let closeBtn = document.createElement('a');
      closeBtn.className = '__page-console-close';
      closeBtn.addEventListener('click', () => {
        console.log('hide');
      }, false);

      // list container
      this.listContainer = document.createElement('ul');
      this.listContainer.className = '__page-console-list';

      node.className = '__page-console-wrapper';
      node.appendChild(closeBtn);
      node.appendChild(this.listContainer);

      this.node = node;
      this.isShow = false;
    }

    hide() {
      this.isShow = false;
      this.node.classList.remove('__page-console-wrapper-visible');
    }

    show() {
      this.isShow = true;
      this.node.classList.add('__page-console-wrapper-visible');
    }

    appendItem(msg) {
      this.content.push(msg);
      this.refresh();
    }

    refresh() {
      // much faster than innerHTML
      while (this.listContainer.firstChild) {
        this.listContainer.removeChild(this.listContainer.firstChild);
      }
      this.listContainer.appendChild(generateList(this.content));
    }
  };

  let bodyElement = document.getElementsByTagName('body')[0];
  function insertStyle(style) {
    var styleNode = document.createElement('style');
    var styleTextNode = document.createTextNode(style);
    styleNode.rel = 'stylesheet/css';
    styleNode.appendChild(styleTextNode);
    bodyElement.appendChild(styleNode);
  }
  insertStyle(style);

  function pageConsole(rawCsl) {
    let msgDom;
    let wrapper = new Wrapper();
    bodyElement.appendChild(wrapper.node);

    if (!rawCsl) {
      // mount all methods on `pconsole` object
    }

    for (let k in rawCsl) {
      if (typeof rawCsl[k] === 'function') {
        redirect(k);
      }
    }

    function redirect(k) {
      var _copy = rawCsl[k];
      rawCsl[k] = function(msg) {
        try {
          if (!wrapper.isShow) {
            wrapper.show();
          }
          wrapper.appendItem(msg);
        } catch(err) {
          alert(err);
        }
        _copy.apply(this, Array.prototype.slice.call(arguments));
      };
    }

    window.addEventListener('error', function() {
      console.log(arguments);
    }, false);
  };

  pageConsole(console);

  console.log('log message');

}());