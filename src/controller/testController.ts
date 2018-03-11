import * as express from 'express'
import { Controller, Get, Post, Put, Delete, QueryParam, RequestParam, RequestBody, Request, Cookies, Session, Response, ResponseBody, SSR, TYPE } from '../util/server';
import { provideNamed, provide, inject, lazyInject, container } from '../util/ioc';

@provideNamed(TYPE.Controller, 'TestController')
@Controller('/')
class TestController {

  // @inject('logger')
  // private logger: LoggerInstance

  @Get('test/get')
  public async testGet(
    @QueryParam('abc') abc: string,
    // @Response() res: express.Response,
    // @Request() req: express.Request,
    // @Session() session: any,
  ) {
    return 'abc  ' + abc
  }

  @Post('test/post')
  public async testPost(
    @RequestBody('abc') abc: string,
    // @Session() session: any,
  ) {
    return 'abc  ' + abc
  }
}
