import { useCallback } from "react";
import { useFormApi } from "../hooks/use-form-api"
import { Button } from "./input-button";

export const RemoveElement = ({index, path, buttonClass="icon__remove"}) => {
    const {removeAt} = useFormApi();
    const onRemove = useCallback(() => {
        removeAt(path, index);
    });
    
    return <Button onClick={onRemove} buttonClass={buttonClass} ripple={false} icon="trash" />
}