import { a, obj } from './module/es6Module/main'
console.log('es6Module', a, obj);

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