配合 [reactSPA](https://github.com/MuYunyun/reactSPA) 使用的网关项目(TypeScript + Node.js)

### Usage

执行以下命令

```
npm start
npm run compile
```

在浏览器中输入 http://localhost:4000/api/music/list 能获得相应的音乐列表的数据

### 装饰器用法解释

| 装饰器 | 表示 | 用法 |
|:---:|:---:|:---:|
| Controller | 抽离公共路由部分 | @Controller('/') |

### todo

- [ ] 断点调试

### articles

- [ ] ioc 模式实践
- [x] [RPC在点我达网关项目的实践一](https://github.com/MuYunyun/blog/blob/master/BasicSkill/系统篇/RPC在点我达网关的实践一.md)
