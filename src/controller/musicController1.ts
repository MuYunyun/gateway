// import { Controller, Get, Post, QueryParam, RequestBody, Session, ResponseBody, TYPE } from '../util/server';
// import { provideNamed, inject, lazyInject, container } from '../util/ioc';
// import MusicManager from '../manager/musicManager'

// @provideNamed(TYPE.Controller, 'MusicController')
// @Controller('/')
// class MusicController {

//   @inject('MusicManager')
//   private musicManager: MusicManager

//   @Get('api/music/list')
//   public async testGet(
//     @QueryParam('title') title: string,
//     // @Session() session: any,
//   ) {
//     const result = await this.musicManager.getList()
//     return result
//   }

//   @Post('test/post')
//   public async testPost(
//     @RequestBody('abc') abc: string,
//     // @Session() session: any,
//   ) {
//     return 'abc  ' + abc
//   }
// }
