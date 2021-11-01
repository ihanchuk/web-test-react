export const textValidationRules = {
    isRequired: {
        errorText: "Please, select a project",
    }
}

export const durationValidationRules = {
    isNumber: {
        errorText: "Value is not a Number",
    },
    isBetween: {
        errorText: "Should be Number and in ranfe of [1...100]",
        meta: {min:1, max: 100}
    }
}

export const projectValidationRules = {
    isRequired: {
        errorText: "Please, provide Project description",
    }
}

export const unitValidationRules = {
    isRequired: {
        errorText: "Unit is required",
    }
}