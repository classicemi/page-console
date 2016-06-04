import HASH from './hash';

let tpl = `
<div id="_page-console-${HASH}-mask"></div>
<div id="_page-console-${HASH}-pannel">
  <div id="_page-console-${HASH}-tab">
    <ul></ul>
  </div>
</div>
<button type="button" id="_page-console-${HASH}-switch">Page Console</button>
`;

export default tpl;
