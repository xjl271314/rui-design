const Types = {
    isPrototype(data) {
        // [object Object] 截取后面的类型
        return Object.prototype.toString.call(data).slice(8, -1)
    },
    isArray(data) {
        return this.isPrototype(data) === 'Array'
    },
    isObject(data) {
        return this.isPrototype(data) === 'Object'
    },
    isFunction(data) {
        return this.isPrototype(data) === 'Function'
    },
    isString(data) {
        return this.isPrototype(data) === 'String'
    },
    isNumber(data) {
        return this.isPrototype(data) === 'Number'
    },
    isUndefined(data) {
        return this.isPrototype(data) === 'Undefined'
    },
    isNull(data) {
        return this.isPrototype(data) === 'Null'
    },
    isEmpty(data){
        return this.isString(data) && !data
    },
    isEmptyObject(data){
        return this.isObject(data) && Object.keys(data).length === 0
    }
}

export default Types