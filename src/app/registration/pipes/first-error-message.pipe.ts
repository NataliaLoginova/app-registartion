import {Pipe} from "@angular/core";
import {FieldValidation} from "../../mock-data/registration";

@Pipe({
    name: 'firstErrorMessage'
})
export class FirstErrorMessagePipe {
    transform(errors: any, validations: FieldValidation[] | undefined): string {
        const keysError = Object.keys(errors);
        const validation = validations?.find((validation: FieldValidation) => {
            if (validation.name == 'regex' && keysError.includes('pattern')) {
                const key = keysError.find(keyError => keyError === 'pattern') as string;
                return validation.value === errors[key].requiredPattern
            } else if (keysError.includes(validation.name)) {
                const key = keysError.find(keyError => keyError === validation.name) as string;
                return validation.value === errors[key].requiredLength
            }
        }) as FieldValidation;
        return validation.message;
    }
}
