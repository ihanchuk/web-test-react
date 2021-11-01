import React, { useCallback } from "react";
import { useFormApi } from "../hooks/use-form-api";

export const InputTag = ({path}) => {
    const ref=React.useRef();
    const elementRef = React.useRef();
    const {push} = useFormApi();
    
    const onKey = useCallback((e) => {
        console.log(e.code);
        if (e.code === "NumpadEnter" || e.code === "Enter") {
            console.log("Adding new");
            push({label: ref.current, value: ref.current}, ".projectNames");
            elementRef.current.value = '';
        }
    });

    const onChange = useCallback((e) => {
        ref.current = e.target.value;
    });

    return <div className="tag__controll"> 
            <input 
                className="tag__input"
                type="text" 
                onKeyPress={onKey} 
                onChange={onChange} 
                ref={elementRef} 
            />
        </div>
}