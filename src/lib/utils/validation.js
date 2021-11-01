import { validators } from "./validators";

export const validateFormValue = (value, config, breakOnFirstError = false) => {
    const rules = Object.keys(config);

    const errors = [];

    rules.forEach((ruleName)=>{

        const validationMeta = config[ruleName].meta ? config[ruleName].meta : null;
        const validationFunction = config[ruleName].validationFunction 
            ? config[ruleName].validationFunction
            : validators[ruleName];
        const validated = validationFunction(value, validationMeta);
       if(!validated) {
           errors.push(config[ruleName].errorText)
           console.error(`Rule ${ruleName} is violated`);
       } 
    });

    return errors;
}