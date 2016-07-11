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
  classNames.forEach(name => {
    node.className += ` ${name}`;
  });
};

$.removeClass = function(node, classNames) {
  if (!isArray(classNames)) {
    classNames = [classNames];
  }
  classNames.forEach(name => {
    let nameRegExp = new RegExp(`\s?${name}`);
    node.className.replace(nameRegExp, '');
  });
}

export { $ };
