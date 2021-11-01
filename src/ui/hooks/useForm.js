import { useReducer, useRef } from "react";
import { set, get, deepCopy } from "../../lib/utils";
import { validateFormValue } from "../../lib/utils/validation";

function reducer(state, action) {
    switch (action.type) {
      case 'CHANGED_FIELD':
        return action.payload;
      case 'ARRAY_MUTATED':
        return action.payload;
      default:
        throw new Error("Action required in reducer");
    }
  }

export const useForm = (initialValues, onSubmit, onBeforeSubmit) => {
    const formInitials = useRef(deepCopy(initialValues));
    
    const [state, dispatch] = useReducer(reducer, {formValues: deepCopy(initialValues), formErrors: {}, isDirty: false});

    const onFieldChanged = (event, validationRules, predefinedName=null, predefinedValue=null) => {
       let elementName;
       let controlValue
       if (predefinedName) {
        elementName = predefinedName;
        controlValue = predefinedValue;
       } else {
        event.persist();
        elementName = event.target.name;
        controlValue = event.target.value;
       } 

        const payload = deepCopy(state);
        payload.isDirty = true;

        const elementPath = `.formValues.${elementName}`;
        const fieldErrors = validateFormValue(controlValue, validationRules);

        set(payload, elementPath, controlValue);
        payload.formErrors[elementName] = fieldErrors;

        dispatch({type: 'CHANGED_FIELD', payload});
    };

    const formApi = {
            push: (data, path) => {
                const newElement = deepCopy(data);
                const newFormState = deepCopy(state);
                const current = get(newFormState, `.formValues.${path}`, []);
                current.push(newElement);
                dispatch({type: 'ARRAY_MUTATED', payload: newFormState});
                return newFormState;
            },
            getArrayValues: (path) => {
                return get(state, `.formValues.${path}`, []);
            },
            removeAt: (path, index) =>{
                const newFormState = deepCopy(state);
                const current = get(newFormState, `.formValues.${path}`, []);
                current.splice(index, 1);
                dispatch({type: 'ARRAY_MUTATED', payload: newFormState});
            },
            setField:(name, value, validationRules, reValidate = true) => {
                setTimeout(() =>onFieldChanged(null, validationRules, name, value),0);
            },
            revertForm: () => {
                const payload =  {
                    formValues: formInitials.current,
                    formErrors: {}, 
                    isDirty: false
                };
                dispatch({type: 'ARRAY_MUTATED', payload});
                console.log(formInitials.current);
            }
    }

    const onFormSubmit = (e) => {

        e.preventDefault();
        const {formErrors, isDirty} = state;
        let freeOfErrors = true;

        for(let el in formErrors) {
            const val = formErrors[el];
           if(Array.isArray(val) && val.length > 0) {
            freeOfErrors = false;
           }
        }

        if(freeOfErrors && isDirty) {
            const values = onBeforeSubmit(state.formValues);
            onSubmit(values);
        }

        return false;
    }

    const onFieldBlur = (event) => {
        /*

        */
    };
    
    return {
        formValues: state.formValues, 
        formErrors: state.formErrors, 
        isDirty: state.isDirty, 
        onFieldChanged, 
        onFieldBlur,
        onSubmit: onFormSubmit,
        formApi
    };
}