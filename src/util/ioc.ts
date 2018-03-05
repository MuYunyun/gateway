import { Container, inject, injectable } from 'inversify';
import { autoProvide, makeProvideDecorator, makeFluentProvideDecorator } from 'inversify-binding-decorators';
import getDecorators from 'inversify-inject-decorators';

let container = new Container();
let { lazyInject } = getDecorators(container)

let provide = makeProvideDecorator(container);
let fluentProvider = makeFluentProvideDecorator(container);

let provideNamed = function (identifier: any, name: string) {
  return fluentProvider(identifier)
    .whenTargetNamed(name)
    .done();
}

let provideSingleton = function (identifier: any) {
  return fluentProvider(identifier)
    .inSingletonScope()
    .done();
}

export { container, autoProvide, provide, provideSingleton, provideNamed, inject, lazyInject, injectable }