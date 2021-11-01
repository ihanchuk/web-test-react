export const isArray = value => Array.isArray(value);

export const isEmptyString = value =>
    isString(value) && value.trim().length === 0;

export const isFunction = value => typeof value === 'function';

export const isUndefined = value => value === undefined;

export const isNil = value => isNull(value) || isUndefined(value);

export const isNull = value => value === null;

export const isString = value => typeof value === 'string';

export const isNumber = value => typeof value === 'number';