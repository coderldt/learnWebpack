// 全局注册组件
// import Data from './requied/one.vue'
const data = require.context('./requied', true, /\.vue/)

data.keys().forEach(filePath => {
    console.log(data(filePath).default);
})

