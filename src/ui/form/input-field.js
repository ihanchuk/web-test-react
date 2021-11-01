import { useControllHandler } from "../hooks/use-form-handler";
import { useFormValue } from "../hooks/use-form-value";
import { TextInputControll } from "./elements/input";
import { useControllError } from "../hooks/use-controll-error";

export const InputField = ({name, label, type="text", validationRules}) => {
    const val = useFormValue(name);
    const fieldErrors = useControllError(name);
    const onChange = useControllHandler();

    const onFieldChanged = (event) => {
        onChange(event, validationRules);
    }

    return <TextInputControll 
        onChange={onFieldChanged} 
        onBlur={() =>{}} 
        value={val}
        name={name}
        label={label}
        type={type}
        validationErrors={fieldErrors}
    />
}