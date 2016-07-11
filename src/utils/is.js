let objProto = Object.prototype;

export function isFunction(o) {
  return objProto.toString.call(o) === '[object Function]';
}

export function isString(o) {
  return objProto.toString.call(o) === '[object String]';
}

export function isNumber(o) {
  return objProto.toString.call(o) === '[object Number]';
}

export function isBoolean(o) {
  return objProto.toString.call(o) === '[object Boolean]';
}

export function isArray(o) {
  return objProto.toString.call(o) === '[object Array]';
}

export function isNull(o) {
  return objProto.toString.call(o) === '[object Null]';
}

export function isUndefined(o) {
  return objProto.toString.call(o) === '[object Undefined]';
}

export function isSymbol(o) {
  return objProto.toString.call(o) === '[object Symbol]';
}

export function isObject(o) {
  return objProto.toString.call(o) === '[object Object]';
}
