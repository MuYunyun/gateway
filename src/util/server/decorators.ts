import * as express from "express"
import { interfaces } from "./interfaces"
import { METADATA_KEY, PARAMETER_TYPE } from "./constants"

export function Controller(path: string = '') {
  return (target: any) => {
    const metadata: interfaces.ControllerMetadata = { path, target }
    Reflect.defineMetadata(METADATA_KEY.controller, metadata, target)
  }
}

export function Get(path: string): interfaces.HandlerDecorator {
  return Method("get", path)
}

export function Post(path: string): interfaces.HandlerDecorator {
  return Method("post", path)
}

export function Method(method: string, path: string): interfaces.HandlerDecorator {
  return (target: any, key: string, descriptor: any) => {
    const metadata: interfaces.ControllerMethodMetadata = { path, method, target, key }
    let metadataList: interfaces.ControllerMethodMetadata[] = []

    if (!Reflect.hasOwnMetadata(METADATA_KEY.controllerMethod, target.constructor)) {
      Reflect.defineMetadata(METADATA_KEY.controllerMethod, metadataList, target.constructor)
    } else {
      metadataList = Reflect.getOwnMetadata(METADATA_KEY.controllerMethod, target.constructor)
    }
    metadataList.push(metadata)
  }
}

export const QueryParam = paramDecoratorFactory(PARAMETER_TYPE.QUERY)
export const RequestBody = paramDecoratorFactory(PARAMETER_TYPE.BODY)
export const Session = paramDecoratorFactory(PARAMETER_TYPE.SESSION)

function paramDecoratorFactory(parameterType: PARAMETER_TYPE): (name?: string) => ParameterDecorator {
  return (name?: string): ParameterDecorator => {
    name = name || "default"
    return Params(parameterType, name)
  }
}

export function Params(type: PARAMETER_TYPE, parameterName: string) {
  return function (target: object, methodName: string, index: number) {

    let metadataList: interfaces.ControllerParameterMetadata = {}
    let parameterMetadataList: interfaces.ParameterMetadata[] = []
    const parameterMetadata: interfaces.ParameterMetadata = {
      index: index,
      parameterName: parameterName,
      type: type,
    }
    if (!Reflect.hasOwnMetadata(METADATA_KEY.controllerParameter, target.constructor)) {
      parameterMetadataList.unshift(parameterMetadata)
    } else {
      metadataList = Reflect.getOwnMetadata(METADATA_KEY.controllerParameter, target.constructor)
      if (metadataList.hasOwnProperty(methodName)) {
        parameterMetadataList = metadataList[methodName]
      }
      parameterMetadataList.unshift(parameterMetadata)
    }
    metadataList[methodName] = parameterMetadataList
    Reflect.defineMetadata(METADATA_KEY.controllerParameter, metadataList, target.constructor)
  }
}

const After = (reducer: (result: Promise<any>, req: express.Request, res: express.Response, next: express.NextFunction) => void) => (target: object, key: any) => {
  if (key) {
    Reflect.defineMetadata(METADATA_KEY.controllerAfter, reducer, target.constructor, key)
  } else {
    Reflect.defineMetadata(METADATA_KEY.controllerAfter, reducer, target.constructor)
  }
}

export const ResponseBody = After((result, req, res) => {
  if (result instanceof Error) {
    res.json({
      status: 0,
      msg: result,
    })
    return
}})

