import { Container, inject, injectable } from 'inversify'
import { makeProvideDecorator, makeFluentProvideDecorator } from 'inversify-binding-decorators'
import getDecorators from 'inversify-inject-decorators'

let container = new Container()
let { lazyInject } = getDecorators(container)

let provide = makeProvideDecorator(container)
let fluentProvider = makeFluentProvideDecorator(container)

let provideNamed = function (identifier: any, name: string) {
  return fluentProvider(identifier)
    .whenTargetNamed(name)
    .done()
}

export { container, provide, provideNamed, inject, lazyInject, injectable }