import { v4 } from 'uuid'
import { NextFunction, Request, Response } from 'express'

export function uuid(req: Request, res: Response, next: NextFunction) {
  const uuids = v4()
  req['uuid'] = uuids
  res.setHeader('trace-id', uuids)
  next()
}