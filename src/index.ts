import * as express from 'express'

import bootstrap from './util/bootstrap'
import { mountMiddlewares } from './middleware'

const app = express()

// mount all middlewares
mountMiddlewares(app)

// initialized ioc container and start express application
bootstrap(app)