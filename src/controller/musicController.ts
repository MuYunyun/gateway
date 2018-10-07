import { Controller, Get, Post, Put, Delete, QueryParam, RequestParam, RequestBody, Request, Cookies, Session, Response, ResponseBody, SSR, TYPE } from '../util/server';
import { provideNamed, provide, inject, lazyInject, container } from '../util/ioc';
import MusicManager from '../manager/musicManager'

@provideNamed(TYPE.Controller, 'MusicController')
@Controller('/')
class MusicController {

  // 这里的 TestManager 对应 provide 提供的 TestManager, 源码中 inject 最终走到 Reflect.defineMetadata()，
  // defineMetadata 方法里比较有学问，下次再研究了，因为看到 injectable(provide) 的源码以及 inject 的源码都用到了 defineMetadata 这个 api,
  @inject('MusicManager')
  private musicManager: MusicManager

  @Get('api/music/list')
  public async testGet(
    @QueryParam('title') title: string,
    // @Session() session: any,
  ) {
    const result = await this.musicManager.getList()
    return result
  }

  @Post('test/post')
  public async testPost(
    @RequestBody('abc') abc: string,
    // @Session() session: any,
  ) {
    return 'abc  ' + abc
  }
}
