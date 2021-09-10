import _ from 'lodash'

import './main.css'

import img from './back.png'

import DataXml from './data.xml'
import DataCsv from './data.csv'


import toml from './data.toml';
import yaml from './data.yaml';
import json from './data.json5';

console.log(toml.title); // output `TOML Example`
console.log(toml.owner.name); // output `Tom Preston-Werner`

console.log(yaml.title); // output `YAML Example`
console.log(yaml.owner.name); // output `Tom Preston-Werner`

console.log(json.title); // output `JSON5 Example`
console.log(json.owner.name); // output `Tom Preston-Werner`

function component() {
    const ele = document.createElement('div')
    ele.innerHTML = _.join(['hello', 'word'], ' ')

    ele.classList.add('hi')

    const pic = document.createElement('img')
    pic.src = img
    ele.appendChild(pic)

    return ele
}

console.log(DataXml, DataCsv);



document.body.appendChild(component())
