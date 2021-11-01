export const optionsProcessor = (finalOptions, value) => {

    const isValueInFieldOptions = finalOptions.find(el => el.value === value)

    if(!isValueInFieldOptions) {
        finalOptions = finalOptions.filter(el => el.value !== value);
        finalOptions.splice(0,0,{value: null, label: ''});
        return {options: finalOptions, value: null};
    } else {
        return {options: finalOptions, value};
    }

}