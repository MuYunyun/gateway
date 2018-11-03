import * as express from "express"
import { interfaces as inversifyInterfaces } from "inversify"
import { PARAMETER_TYPE } from "./constants"

declare namespace interfaces {

  export type Middleware = (inversifyInterfaces.ServiceIdentifier<any> | express.RequestHandler);

  export interface ControllerMetadata {
    path: string;
    target: any;
  }

  export interface ControllerMethodMetadata extends ControllerMetadata {
    method: string;
    key: string;
  }

  export interface ControllerParameterMetadata {
    [methodName: string]: ParameterMetadata[];
  }

  export interface ParameterMetadata {
    parameterName: string;
    index: number;
    type: PARAMETER_TYPE;
  }

  export interface BeforeMetadata {
    (args: any[], req: express.Request, res: express.Response, next: express.NextFunction): any[]
  }

  export interface AfterMetadata {
    (result: any | Promise<any>, req: express.Request, res: express.Response, next: express.NextFunction): any | Promise<any>
  }

  export interface Controller { }

  export interface HandlerDecorator {
    (target: any, key: string, value: any): void;
  }

  export interface RoutingConfig {
    rootPath: string;
  }
}

export { interfaces }