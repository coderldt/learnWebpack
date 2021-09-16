import _ from 'lodash'
import moment from 'moment'
import './component.js'

import back from './assets/img/back.png'

import './module/es6Module/es6ModuleTest'

function component() {
    const ele = document.createElement('div')
    ele.innerHTML = _.join(['hello', 'word'], ' ')

    const btn = document.createElement('button')
    btn.innerHTML = 'Click me and check the console!';
    // btn.onclick = e => import(/* webpackChunkName: "print" */ './print.js').then(module => {
    //     console.log(module);
    //     const print = module.default;
   
    //     print();
    // });

    ele.appendChild(btn)

    const img = new Image()
    img.src = back  
    ele.appendChild(img)

    return ele
}

// document.body.appendChild(component())

function commonjsTest() {
    let { a, obj, getMsg } = require('./module/commonjs/main')
    
    a = 456
    obj.name = '王五'
    
    console.log(a, obj, getMsg());
    const btn = document.createElement('button')
    btn.innerHTML = '123456789'
    
    
    document.body.appendChild(btn)
    btn.onclick = (e) => import('./print.js')
}
commonjsTest()

// if (module.hot) {
//     module.hot.accept('./print.js', function() {
//         document.body.removeChild(element);
//         element = component(); // 重新渲染 "component"，以便更新 click 事件处理函数
//         document.body.appendChild(element);
//     })
// }
