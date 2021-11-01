import { useCallback } from "react";
import { If } from "../ui/blocks/if";
import { Button } from "../ui/form/input-button";
import { useFormApi } from "../ui/hooks/use-form-api";
import { useFormValue } from "../ui/hooks/use-form-value";
import { useIsSubmittable } from "../ui/hooks/use-is-submittable";

export const FormControlls = () => {
    const {revertForm} = useFormApi();
    const isOk = useIsSubmittable();
    const notes = useFormValue(".notes");
    const reloadForm = useCallback(() => {revertForm()});
    
    return <div className="form__controlls_submit">
        <If condition={notes.length > 0}>
            <Button type="submit" disabled={!isOk}>Send Data</Button>
            <Button onClick={reloadForm} buttonClass="secondary"> Cancel </Button>
        </If>
        <If condition={notes.length == 0}>
            <div>
                <h3>Please add some notes</h3>
                <p> It makes no sense to send form without project notes!</p>
            </div>
        </If>
    </div>
}