import { useControllHandler } from "../hooks/use-form-handler";
import { useFormValue } from "../hooks/use-form-value";
import { useControllError } from "../hooks/use-controll-error";
import { TextAreatControll } from "./elements/text-area";

export const InputMultiline= ({name, label,validationRules}) => {
    const val = useFormValue(name);
    const fieldErrors = useControllError(name);
    const onChange = useControllHandler();

    const onFieldChanged = (event) => {
        onChange(event, validationRules);
    }

    return <TextAreatControll
        onChange={onFieldChanged} 
        onBlur={() =>{}} 
        value={val}
        name={name}
        label={label}
        validationErrors={fieldErrors}
    />
}