import React from "react";
import { useControllHandler } from "../hooks/use-form-handler";
import { useFormValue } from "../hooks/use-form-value";
import { SelectControll } from "./elements/select";
import { useControllError } from "../hooks/use-controll-error";
import { useFormApi } from "../hooks/use-form-api";

export const SelectField = ({name, label, validationRules, options=[], isDynamic = false, fieldSrc= null}) => {
    let val = useFormValue(name);
    const ref = React.createRef();
    const fieldErrors = useControllError(name);
    const onChange = useControllHandler();
    const {getArrayValues, setField} = useFormApi();

    const onFieldChanged = (event) => {
        onChange(event, validationRules);
    }

    let finalOptions = !isDynamic ? options : [...getArrayValues(fieldSrc)];
    const isInFieldOptions = finalOptions.find(el => el.value === val)

    if(!isInFieldOptions) {
        finalOptions = finalOptions.filter(el => el.value !== val);
        finalOptions.splice(0, 0, {value: '', label:''});
        if(val) {
                setField(name, '', validationRules)
        }
       
    }

    return <SelectControll
            onChange={onFieldChanged} 
            onBlur={() =>{}} 
            elValue={val}
            name={name}
            label={label}
            ref={ref}
            options={finalOptions}
            validationErrors={fieldErrors}
        />
}