import { injectable, inject } from "inversify"
import { container, lazyInject } from '../util/ioc'
import { Controller, Get, Post, QueryParam, RequestBody, Session, ResponseBody, TYPE } from '../util/server'
import MusicManager from '../manager/musicManager'

@injectable()
@Controller('/')
class MusicController {

  @inject('MusicManager')
  musicManager: MusicManager

  @Get('api/music/list')
  public async testGet(
    @QueryParam('title') title: string,
    // @Session() session: any,
  ) {
    const result = await this.musicManager.getList(title)
    return result
  }

  // @Post('test/post')
  // public async testPost(
  //   @RequestBody('abc') abc: string,
  // ) {
  //   return 'abc' + abc
  // }
}

container.bind(TYPE.Controller).to(MusicController)