import { Button } from "../ui/form/input-button";
import { useFormApi } from "../ui/hooks/use-form-api";
import { newElement } from "../meta/fake-single-element";
import { useCallback } from "react";

export const NewProjectDetails = () => {
    const {push} = useFormApi();
    
    const addNewDetail = useCallback(() => {
        push(newElement, '.notes')
    });
    
    return <Button type="img" icon="add" onClick={addNewDetail} label="New" role="addNew" />
}