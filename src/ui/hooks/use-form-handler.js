import {useContext} from "react";
import { FormContext } from "../form/form-wrapper";

export const useControllHandler = () => {
    const {onFieldChanged} = useContext(FormContext);
    return onFieldChanged;
}