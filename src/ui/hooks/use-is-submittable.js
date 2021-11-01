import {useContext} from "react";
import { FormContext } from "../form/form-wrapper";

export const useIsSubmittable = () => {
    const {formErrors, isDirty} = useContext(FormContext);
    let freeOfErrors = true;
    for(let el in formErrors) {
        const val = formErrors[el];
       if(Array.isArray(val) && val.length > 0) {
        freeOfErrors = false;
       }
    }
    return freeOfErrors && isDirty;
}