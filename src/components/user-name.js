import { textValidationRules } from "../meta"
import { InputField } from "../ui/form/input-field"

export const UserName = () => {
    return <div>
        <h3>User Name </h3>
        <InputField 
            name=".userName"
            label="User Name" 
            validationRules={textValidationRules} 
        />
    </div>
}