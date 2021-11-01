import {useContext} from "react";
import { FormContext } from "../form/form-wrapper";


export const useFormValues = () => {
    const {formValues} = useContext(FormContext);
    return formValues;
}