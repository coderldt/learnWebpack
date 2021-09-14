## 模块化
- commonjs
``` js
    module.exports = {
        a,
        obj,
        getMsg
    }

    const { a, obj, getMsg } = require('./print.js')
    // const { a, obj, getMsg } ... 所以是可以修改的
```
    - 导出的变量是值的拷贝，是可以修改的
        - 基本数据类型是值的拷贝，修改后其他地方不会影响，
        - 引用数据类型会
    - 可以在程序执行过程中加载

- es6Module
``` js
    export { a, obj, getMsg }

    import { a, obj, getMsg } from './main'
    a = 15 // 报错
    obj = 14 // 报错
    obj.name = 14 // 可以
    // 值得引用，不可修改
```
- 导出的是值得引用，不可以修改
    - 基本数据类型，不可修改
    - 引用数据类型，可以修改子属性,修改后其他地方会影响
- 编译时加载，会置顶