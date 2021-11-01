import {useContext} from "react";
import { FormContext } from "../form/form-wrapper";


export const useControllError = (path) => {
    const {formErrors} = useContext(FormContext);
    return formErrors[path] || [];
}

