import {createContext} from 'react';
import { useForm } from '../hooks/useForm';

export const FormContext = createContext(null);

const FormContextProvider = ({children, val}) => {
    return <FormContext.Provider value={val}>
        {children}
    </FormContext.Provider>
}

export const FormikContext = ({initialValues, children, onFormSubmit, onProcess}) => {
    const {
        formValues, 
        formErrors, 
        onFieldChanged, 
        onFieldBlur, 
        onSubmit, 
        formApi, 
        isDirty
    } = useForm(initialValues, onFormSubmit, onProcess);

    return <form onSubmit={onSubmit}>
        <FormContextProvider val={{formValues, formErrors, isDirty, onFieldChanged, onFieldBlur, formApi}}>
            {children}
        </FormContextProvider>
    </form>
}