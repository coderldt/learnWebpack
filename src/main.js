import _ from 'lodash'
import moment from 'moment'
import './component.js'


import { printMe } from './print'

import back from './assets/img/back.png'


function component() {
    const ele = document.createElement('div')
    ele.innerHTML = _.join(['hello', 'word'], ' ')

    const btn = document.createElement('button')
    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe

    ele.appendChild(btn)

    const img = new Image()
    img.src = back  
    ele.appendChild(img)

    return ele
}

document.body.appendChild(component())


if (module.hot) {
    module.hot.accept('./print.js', function() {
        console.log('Accepting the updated printMe module!');
        printMe();
    })
}
