可搭配 [reactSPA](https://github.com/MuYunyun/reactSPA) 一起使用

### 技术栈

TypeScript + Express + InversifyJs

### Usage

执行以下命令

```
npm start
npm run compile
```

试试在浏览器请求接口 `http://localhost:4000/api/music/list?title=卡路里`

<!-- ### 装饰器用法解释

| 装饰器 | 表示 | 用法 |
|:---:|:---:|:---:|
| Controller | 抽离公共路由部分 | @Controller('/') | -->

### todo

- [ ] nodemon 文档阅读，3星
- [ ] 分析 injectable、inject、container，5星
- [ ] 分析字符请求类型会转换的问题，5星

### articles

- [ ] ioc 模式实践
- [x] [RPC在点我达网关项目的实践一](https://github.com/MuYunyun/blog/blob/master/BasicSkill/系统篇/RPC在点我达网关的实践一.md)

### 踩坑记录

#### 项目在 vscode 中的 debugger

* vscode 断点调试配置，项目使用 nodemon 启动，所以要在 nodemon.json 里进行相应配置

> Please note that this requires that your node program has been launched with the --debug argument since otherwise the debugger cannot attach to it.