import { useCallback } from "react";
import { useFormApi } from "../hooks/use-form-api"
import { Button } from "./input-button";

export const RemoveElement = ({index, path, alt="",buttonClass="icon__remove", ...rest}) => {
    const {removeAt} = useFormApi();
    const onRemove = useCallback(() => {
        removeAt(path, index);
    });
    
    return <Button onClick={onRemove} buttonClass={buttonClass} ripple={false} icon="trash" {...rest} />
}