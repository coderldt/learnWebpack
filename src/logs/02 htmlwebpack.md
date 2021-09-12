## htmlwebpackplugin
> 自动生成html模板插件
``` js
    plugins: [
        new htmlWebpackPlguin({
            title: 'Output Management',
            template: './index.html',
            meta: {
                'viewport' : 'width=device-width, initial-scale=1, shrink-to-fit=no',
                keywords: '你的,我的,他的',
            }
        })
    ]
```