import _ from 'lodash'
import moment from 'moment'

import { printMe } from './print'


function component() {
    const ele = document.createElement('div')
    ele.innerHTML = _.join(['hello', 'word'], ' ')

    const btn = document.createElement('button')
    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe

    ele.appendChild(btn)

    return ele
}

document.body.appendChild(component())

if (module.hot) {
    module.hot.accept('./print.js', function() {
        console.log('Accepting the updated printMe module!');
        printMe();
    })
}
