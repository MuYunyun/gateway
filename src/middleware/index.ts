import { v4 } from 'uuid'
import { NextFunction, Request, Response } from 'express'
import { Application } from 'express'
import { uuid } from './trace'
import { accesscors } from './cors'

export function mountMiddlewares(app: Application) {
  app.use(uuid)

  accesscors(app) // cors

  return app
}