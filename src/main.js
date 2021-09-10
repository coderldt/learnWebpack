import _ from 'lodash'
function component() {
    const ele = document.createElement('div')
    ele.innerHTML = _.join(['hello', 'word'], ' ')

    return ele
}

document.body.appendChild(component())
