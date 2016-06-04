import HASH from './hash';

let tpl = `
<div id="_page-console-${HASH}-mask"></div>
<div id="_page-console-${HASH}-panel">
  <div id="_page-console-${HASH}-tab">
    <ul></ul>
  </div>
</div>
<button type="button" id="_page-console-${HASH}-switch">P</button>
`;

export default tpl;
