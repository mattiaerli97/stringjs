export const isString = (o) => {
    return typeof o === 'string'
}

export const isArray = (o) => {
    return typeof o === 'object' && Array.isArray(o)
}

export const isFunction = (o) => {
    return typeof o === 'function'
}

export const isNumber = (o) => {
    return typeof o === 'number'
}