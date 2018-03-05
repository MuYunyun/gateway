export function isGenerator(obj: any) {
  return 'function' === typeof obj.next && 'function' === typeof obj.throw;
}

export function isGeneratorFunction(obj: any) {
  var constructor = obj.constructor;
  if (!constructor) {
    return false;
  }
  if ('GeneratorFunction' === constructor.name || 'GeneratorFunction' === constructor.displayName) {
    return true;
  }
  return isGenerator(constructor.prototype);
}

export function isPromise(obj: any) {
  return obj && obj.then && 'function' === typeof obj.then;
}