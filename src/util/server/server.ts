import * as express from "express"
import * as inversify from "inversify"
import { interfaces } from "./interfaces"
import { TYPE, METADATA_KEY, PARAMETER_TYPE } from "./constants"

export class InversifyExpressServer {

  private _router: express.Router
  private _container: inversify.interfaces.Container
  private _app: express.Application
  private _routingConfig: interfaces.RoutingConfig

  /**
   * Wrapper for the express server.
   *
   * @param container Container loaded with all controllers and their dependencies.
   */
  constructor(
    container: inversify.interfaces.Container,
    customApp?: express.Application,
  ) {
    this._container = container
    this._router = express.Router()
    this._routingConfig = {
      rootPath: '/',
    }
    this._app = customApp || express()
  }

  // Applies all routes and configuration to the server, returning the express application.
  public build(): express.Application {
    this.registerControllers()
    return this._app
  }

  private registerControllers() {
    // 获取所有依赖注入的 controllers，即依赖查询
    let controllers: interfaces.Controller[] = this._container.getAll<interfaces.Controller>(TYPE.Controller)
    controllers.forEach((controller: interfaces.Controller) => {

      let controllerMetadata: interfaces.ControllerMetadata = Reflect.getOwnMetadata(
        METADATA_KEY.controller,
        controller.constructor
      )

      // 获取一个 controller 里的所有 method
      let methodMetadata: interfaces.ControllerMethodMetadata[] = Reflect.getOwnMetadata(
        METADATA_KEY.controllerMethod,
        controller.constructor
      )

      // 获取参数
      let parameterMetadata: interfaces.ControllerParameterMetadata = Reflect.getOwnMetadata(
        METADATA_KEY.controllerParameter,
        controller.constructor
      )

      if (controllerMetadata && methodMetadata) {
        methodMetadata.forEach((metadata: interfaces.ControllerMethodMetadata) => {
          let paramList: interfaces.ParameterMetadata[] = []
          if (parameterMetadata) {
            paramList = parameterMetadata[metadata.key] || []
          }

          let handler: express.RequestHandler = this.handlerFactory(controllerMetadata.target.name, metadata.key, paramList) // TestController testHello
          this._router[metadata.method](
            `${controllerMetadata.path}${metadata.path}`,
            handler
          )
        })
      }
    })
    this._app.use(this._routingConfig.rootPath, this._router)
  }

  private handlerFactory(controllerName: any, key: string, parameterMetadata: interfaces.ParameterMetadata[]): express.RequestHandler {
    console.log('controllerName', controllerName)
    let controller = this._container.getNamed(TYPE.Controller, controllerName)
    console.log('999', controller)
    return async (req: express.Request, res: express.Response, next: express.NextFunction) => {
      let args = this.extractParameters(req, res, next, parameterMetadata)
      let action = controller[key].bind(controller)
      let result: any
      try {
        result = await action(...args)
        result && res.send(result)
      } catch (error) {
        next(error)
      }
    }
  }

  // 处理函数参数
  private extractParameters(req: express.Request, res: express.Response, next: express.NextFunction,
    params: interfaces.ParameterMetadata[]): any[] {
    let args = []
    if (!params || !params.length) {
      return [req, res, next]
    }
    for (let item of params) {
      switch (item.type) {
        case PARAMETER_TYPE.QUERY: args[item.index] = item.parameterName && item.parameterName !== 'default' ? this.getParam(req, "query", item.parameterName) : req.query; break;
        case PARAMETER_TYPE.BODY: args[item.index] = item.parameterName && item.parameterName !== 'default' ? this.getParam(req, "body", item.parameterName) : req.body; break;
        case PARAMETER_TYPE.SESSION: args[item.index] = item.parameterName && item.parameterName !== 'default' ? req.session[item.parameterName] : req.session; break;
        default:
          args[item.index] = res; break;
      }
    }
    args.push(req, res, next)
    return args
  }

  private getParam(source: any, paramType: string, name: string) {
    let param = source[paramType] || source
    return param[name]
  }
}