import { If } from "../blocks/if";
import { iconsArray } from "../img/icons";

export const Button = ({
        onClick, 
        label, 
        type="button", 
        icon="", 
        buttonClass="regular", 
        disabled=false,
        ripple=true, 
        children,
        ...rest
    }) => {
    const classNames= `${ripple ? 'ripple' : ''}  ${buttonClass}`
    return <div className="control-button">
            <button 
                onClick={onClick} 
                className={classNames}
                disabled={disabled}
                type={type}
                {...rest}
                >
                    <If condition={icon}>
                        <img src={iconsArray[icon]} width="15" alt="add new"/>
                    </If>
                    {children} {label}
            </button>
        </div>
}