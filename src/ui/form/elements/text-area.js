import React from "react";
import { FormErrors } from "../../blocks/form-errors";

export const TextAreatControll = ({onChange, onBlur, value, name, label, validationErrors, rows=6 }) => {
    return <div className="form__group">
            <textarea 
                id={name}
                name={name}
                className="form__field"
                placeholder={label}
                onChange={onChange}
                rows={rows}
                onBlur={onBlur} 
                value={value}
            />
            <label
                for={name} 
                className="form__label">{label}
             </label>
            <FormErrors validationErrors={validationErrors} />
  </div>
};