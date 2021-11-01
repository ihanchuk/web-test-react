import { textValidationRules, durationValidationRules, unitValidationRules,projectValidationRules } from "../meta";
import { InputField } from "../ui/form/input-field";
import { InputMultiline } from "../ui/form/input-multiline";
import { RemoveElement } from "../ui/form/remove-field";
import { SelectField } from "../ui/form/select-field";

export const ProjectInfo = ({path='', index, base}) => {
    return <div className="project__info" role="project-info">
            <h4>Project Details:</h4>
            <div className="project__info__controll__pane">
                <div className="project__info__controll__remove">
                    <RemoveElement path={base} index={index} alt="remove note" data-testid="remove-note"/>
                </div> 
            </div>
            <div className="project__info__general_info">
                <SelectField 
                    name={`${path}.project`} 
                    label="Project Name" 
                    validationRules={textValidationRules}
                    isDynamic
                    fieldSrc=".projectNames"
                />
                <InputMultiline
                    name={`${path}.details`} 
                    label="Project Details" 
                    validationRules={projectValidationRules}
                />
            </div>
            <div className="project__info__duration__period">
                <div className="project__info__pane">
                    <InputField 
                        name={`${path}.duration`} 
                        label="Duration" 
                        validationRules={durationValidationRules} 
                    />
                </div>
                <div className="project__info__pane">
                    <SelectField 
                        name={`${path}.units`} 
                        label="Units" 
                        validationRules={unitValidationRules}
                        isDynamic
                        fieldSrc=".units"
                    />
                </div>
            </div>
        </div>
}