import consoleDOMGenerator from './consoleDOMGenerator';

function generateList(list) {
  let fragment = document.createDocumentFragment();
  list.forEach(item => {
    let li = document.createElement('li');
    li.appendChild(consoleDOMGenerator(item));
    fragment.appendChild(li);
  });
  return fragment;
}

export default class Wrapper {
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
