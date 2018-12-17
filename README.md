基于 IoC 模式搭建的网关应用。

> 可搭配 [reactSPA](https://github.com/MuYunyun/reactSPA) 一起使用

### 技术栈

TypeScript + Express + InversifyJs

### Usage

执行以下命令

```
npm start
npm run compile
```

试试在浏览器请求接口 `http://localhost:4000/api/music/list?title=卡路里`

### articles

* [解读 IoC 框架 —— InversifyJS](https://github.com/MuYunyun/blog/blob/master/BasicSkill/系统架构篇/解读IoC框架InversifyJS.md)
* [RPC在点我达网关项目的实践一](https://github.com/MuYunyun/blog/blob/master/BasicSkill/系统篇/RPC在点我达网关的实践一.md)

### 踩坑记录

#### 项目在 vscode 中的 debugger

* vscode 断点调试配置，项目使用 nodemon 启动，所以要在 nodemon.json 里进行相应配置

> Please note that this requires that your node program has been launched with the --debug argument since otherwise the debugger cannot attach to it.