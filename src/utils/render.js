import HASH from '../hash';

import defaultConsole from '../default/default';

let logTpl = `
<div class="_page-console-${HASH}-item _page-console-${HASH}-{{type}}">
  <div class="_page-console-${HASH}-log-content">{{content}}</div>
</div>
`;

export default function render(data) {
  let tpl = logTpl;
  data.content = data.content.join(' ');

  let tplPattern = /\{\{([^\}]+)\}\}/g;
  let execResult = null;
  let _p = 0;
  let result = '';

  while (execResult = tplPattern.exec(tpl)) {
    let k = execResult[1];

    result += tpl.slice(_p, execResult.index);
    result += data[execResult[1]];
    _p = execResult.index + execResult[0].length;
  }
  result += tpl.slice(_p, tpl.length);

  let tempNode = document.createElement('div');
  tempNode.innerHTML = result;
  return tempNode.children[0];
}
