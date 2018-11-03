const TYPE = {
  Controller: Symbol("Controller"),
}

const METADATA_KEY = {
  controller: "_controller",
  controllerMethod: "_controller-method",
  controllerParameter: "_controller-parameter",
  controllerAfter: "_controller-after",
}

// 定义枚举类型
export enum PARAMETER_TYPE {
  QUERY,
  BODY,
  SESSION,
}

export { TYPE, METADATA_KEY }
