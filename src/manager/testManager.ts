import { Controller, Get, Post, Put, Delete, QueryParam, RequestParam, RequestBody, Cookies, Session, Response, ResponseBody, SSR, TYPE } from '../util/server';
import { provideNamed, provide, inject, lazyInject } from '../util/ioc';

@provide('TestManager') // provide 为对 injectable 的封装，injectable 的作用 loc 思想：依赖注入
export default class TestManager {
  public async testHello() {
    return 'hello'
  }
}
