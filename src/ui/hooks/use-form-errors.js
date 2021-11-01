import {useContext} from "react";
import { FormContext } from "../form/form-wrapper";


export const useFormErrors = () => {
    const {formErrors} = useContext(FormContext);
    return formErrors;
}