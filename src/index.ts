import "reflect-metadata"
import * as express from 'express'
import * as bodyParse from 'body-parser'
import { accesscors } from './middleware/cors'
import { InversifyExpressServer } from './util/server'
import { container } from './util/ioc'
import './controller/index'

const app = express()

// 跨域
accesscors(app)
// 处理 post 请求
app.use(bodyParse.urlencoded({
  extended: true,
  limit: 10 * 1024 * 1024,
}))

// initialized ioc container and start express application
const server = new InversifyExpressServer(container, app)
server.build().listen('4000')
