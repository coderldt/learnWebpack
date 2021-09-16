import { a, obj, getMsg } from './main'
export default {
    computed: {
        getMinObj() {
            return JSON.parse(JSON.stringify(obj))
        }
    }
}