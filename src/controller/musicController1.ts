// import { Controller, Get, Post, QueryParam, RequestBody, Session, ResponseBody, TYPE } from '../util/server';
// import { provideNamed, lazyInject, container } from '../util/ioc';
// import MusicManager from '../manager/musicManager'
// import { inject } from 'inversify'

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
//     const result = await this.musicManager.getList('卡路里')
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
