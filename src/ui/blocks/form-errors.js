import { If } from "./if"

export const FormErrors = ({validationErrors}) => {
    return <If condition={validationErrors.length > 0}>
        <div className="error-block">
            {
                validationErrors.map(err => <span key={err}>{err}</span>)
            }
        </div>
    </If>
}