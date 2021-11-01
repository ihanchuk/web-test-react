import { isNil, isEmptyString } from "../helpers";

const isRequired = (val) => {
    return isNil(val) || isEmptyString(val) ? false : true;
}

const isBetween = (val, {min, max}) => {
    return isNumber(val) && val <= max && val >= min;
}

const isNumber = (val) => {
    return !Number.isNaN(val)
}

export const validators = {
    isRequired,
    isBetween,
    isNumber,
}
