import _ from 'lodash'
import moment from 'moment'
import './component.js'


import back from './assets/img/back.png'


function component() {
    const ele = document.createElement('div')
    ele.innerHTML = _.join(['hello', 'word'], ' ')

    const btn = document.createElement('button')
    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = e => import(/* webpackChunkName: "print" */ './print.js').then(module => {
        console.log(module);
        const print = module.default;
   
        print();
    });

    ele.appendChild(btn)

    const img = new Image()
    img.src = back  
    ele.appendChild(img)

    return ele
}

document.body.appendChild(component())


// if (module.hot) {
//     module.hot.accept('./print.js', function() {
//         document.body.removeChild(element);
//         element = component(); // 重新渲染 "component"，以便更新 click 事件处理函数
//         document.body.appendChild(element);
//     })
// }
