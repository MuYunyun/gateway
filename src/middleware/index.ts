import * as bodyParse from 'body-parser'
import { v4 } from 'uuid'
import { NextFunction, Request, Response } from 'express'
import { Application } from 'express'
import { uuid } from './trace'
import { accesscors } from './cors'

export function mountMiddlewares(app: Application) {
  app.use(uuid)

  // cors
  accesscors(app)

  // 处理 post 请求
  app.use(bodyParse.urlencoded({
    extended: true,
    limit: 10 * 1024 * 1024,
  }))

  return app
}