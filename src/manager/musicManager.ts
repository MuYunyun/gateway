import { Controller, Get, Post, Put, Delete, QueryParam, RequestParam, RequestBody, Cookies, Session, Response, ResponseBody, SSR, TYPE } from '../util/server';
import { provideNamed, provide, inject, lazyInject } from '../util/ioc';

@provide('MusicManager') // provide 为对 injectable 的封装，injectable 的作用 loc 思想：依赖注入
export default class MusicManager {
  public async getList() {
    const result = [{ title: '卡路里（电影《西虹市首富》插曲）', author: '火箭少女101', country: '内地', language: '国语' }]
    return result
  }
}
