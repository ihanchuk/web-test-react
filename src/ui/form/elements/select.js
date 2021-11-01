import React from "react";
import { FormErrors } from "../../blocks/form-errors";

export const SelectControll = React.forwardRef((props, ref) => {
    return (
        <div className="form__group">
        <select 
                id={props.name}
                name={props.name}
                className="form__field" 
                placeholder={props.label}
                onChange={props.onChange}
                value={props.elValue}
                ref={ref} 
        >
            {
                props.options.map(({ value, label }) =>{
                    return <option value={value} key={label}>
                        {label}
                    </option>
                })
            }
        </select>
        <label htmlFor="message" className="form__label">{props.label}</label>
        <FormErrors validationErrors={props.validationErrors} />
    </div>
    );
  })