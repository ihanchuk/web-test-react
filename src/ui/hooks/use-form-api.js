import {useContext} from "react";
import { FormContext } from "../form/form-wrapper";

export const useFormApi = () => {
    const {formApi} = useContext(FormContext);
    return formApi;
}