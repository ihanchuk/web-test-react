import { RemoveElement } from "./remove-field";

export const Tag = ({index, base, label}) => {

    return <div className="tag__controll">
        <RemoveElement 
            index={index} 
            path={base}  
            buttonClass="icon__destroy" 
        />
        <span>{label}</span>   
    </div> 
}