## 批量注册

- 首先遇到一个问题，在'production'环境中运行的时候，文件会报大于多少的错误，但是在打包文件中 不会影响使用 带修正
``` js
    const data = require.context('./requied', true, /\.vue/)

    data.keys().forEach(filePath => {
        console.log(data(filePath).default);
    })
```
