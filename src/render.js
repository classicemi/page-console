export default function(type, msg) {
  let _wrapper = document.createElement('div');
  let _msg = document.createElement('p');
  _wrapper.className = `__page-console-wrapper __page-console-wrapper-${type}`;
  _wrapper.appendChild(_msg);

  if (typeof msg === 'string') {
    _msg.insertAdjacentText('afterbegin', msg);
  }

  return _wrapper;
}
