import { isArray } from './is';

let $ = function(selector) {
  let match = document.querySelectorAll(selector);
  if (match.length === 1) {
    return match[0];
  }
  return match;
};

$.addClass = function(node, classNames) {
  if (!isArray(classNames)) {
    classNames = [classNames];
  }
  for (let i = 0, len = classNames.length; i < len; i++) {
    node.className += ` ${classNames[i]}`;
  }
};

$.removeClass = function(node, classNames) {
  if (!isArray(classNames)) {
    classNames = [classNames];
  }
  for (let i = 0, len = classNames.length; i < len; i++) {
    node.className.replace(new RegExp(`\s?${classNames[i]}`), '');
  }
}

export { $ };
