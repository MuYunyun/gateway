import "reflect-metadata"
import { Application } from 'express'
import { InversifyExpressServer } from './server'
import { container } from './ioc'
import './loader'

export default function(app: Application) {
  const server = new InversifyExpressServer(container, null, null, app)
  server.build().listen('4000')
}