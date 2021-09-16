// import { a, getObj } from './module/es6Module/middle'
// console.log('es6Module', a, getObj());
// 改用混入 + computed 方式 结构

console.log(
    'The print.js module has loaded! See the network tab in dev tools...'
);

function commonjsTest() {
    let { a, obj, getMsg } = require('./module/commonjs/main')
    console.log(a, obj);
}

export default () => {
    console.log('Button Clicked: Here\'s "some text"!');
};