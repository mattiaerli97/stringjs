export const isString = (o) => typeof o === 'string';

export const isArray = (o) => typeof o === 'object' && Array.isArray(o);

export const isFunction = (o) => typeof o === 'function';

export const isNumber = (o) => typeof o === 'number';
