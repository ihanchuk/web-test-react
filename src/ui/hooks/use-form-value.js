import {useContext} from "react";
import { get } from "../../lib/utils";
import { FormContext } from "../form/form-wrapper";

export const useFormValue = (controlName) => {
    const {formValues} = useContext(FormContext);
    const elValue = get(formValues, controlName, null)
    return elValue;
}