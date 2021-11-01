import {memo} from "react";
import { useFormErrors } from "../ui/hooks/use-form-errors";

export const FormSave = memo(() => {
    const formErrors = useFormErrors();
    return <div>
        <pre>{JSON.stringify(formErrors, null, 2)}</pre>
    </div>
});