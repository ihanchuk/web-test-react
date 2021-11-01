import { FormErrors } from "../../blocks/form-errors";

export const TextInputControll = ({onChange, onBlur, value, name, label, validationErrors }) => {
    return <div className="form__group">
        <input 
            type="text" 
            id={name} 
            name={name} 
            onChange={onChange} 
            onBlur={onBlur} 
            value={value}  
            className="form__field" 
            placeholder={label} 
        />
        <label htmlFor={name} className="form__label">{label}</label>
        <FormErrors validationErrors={validationErrors} />
     </div>
}