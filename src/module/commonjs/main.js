let a = 123
let obj = {
    age: 20,
    name: '张三'
}

function getMsg() {
    console.log(a, obj);
}

module.exports = {
    a,
    obj,
    getMsg
}