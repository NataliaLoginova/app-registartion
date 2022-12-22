import {Component, ElementRef, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {RegistrationService} from "../services/registration.service";
import {FormBuilder, FormGroup, FormControl, Validators, AbstractControl} from "@angular/forms";
import {RegistrationField, FieldValidation} from "../../mock-data/registration";
import {Router} from "@angular/router";
import {FirstErrorMessagePipe} from "../pipes/first-error-message.pipe";

const PASSWORD_TYPE = 'password';
const TEXT_TYPE = 'text';

enum ValidationNames {
    REGEX = 'regex',
    MAXLENGTH = 'maxlength',
    MINLENGTH = 'minlength',
}

@Component({
    selector: 'app-registration',
    templateUrl: './registration-page.component.html',
    styleUrls: ['./registration-page.component.scss'],
    providers: [FirstErrorMessagePipe],
})
export class RegistrationPageComponent {
    form!: FormGroup;
    fields: RegistrationField[] = [];
    controls!: { [index: string]: FormControl };
    passwordType = PASSWORD_TYPE;
    @ViewChildren('inputElements') inputs!: QueryList<ElementRef>;

    constructor(private _fb: FormBuilder, public router: Router, private registrationService: RegistrationService) {
        this.registrationService.getListOfRegistrationFields().subscribe((regFields: RegistrationField[]) => {
            this.fields = regFields;
            this.createForm(regFields);
            this.createControls();
        });
    }

    createForm(regFields: RegistrationField[]): void {
        const configForm = regFields.reduce((acc: { [index: string]: any }, curr: RegistrationField) => {
                acc[curr.name] = [null];
                const validations = []
                if (curr.required) {
                    validations.push(Validators.required);
                }
                if (curr.validations) {
                    curr.validations.forEach((validation: FieldValidation) => {
                        if (validation.name == ValidationNames.REGEX) {
                            validations.push(Validators.pattern(validation.value as string));
                        }
                        if (validation.name == ValidationNames.MAXLENGTH) {
                            validations.push(Validators.maxLength(validation.value as number));
                        }
                        if (validation.name == ValidationNames.MINLENGTH) {
                            validations.push(Validators.minLength(validation.value as number));
                        }
                    });
                }
                if (validations.length) {
                    acc[curr.name].push(validations);
                }
                return acc;
            }
            , {})
        this.form = this._fb.group(configForm);
    }

    createControls(): void {
        this.controls = this.fields.reduce((acc: { [index: string]: FormControl }, curr: RegistrationField) => {
            acc[curr.name] = this.form.get(curr.name) as FormControl<any>;
            return acc;
        }, {})
    }

    showPassword(index: number): void {
        const inputElement = this.inputs.get(index)!['nativeElement'];
        inputElement.type = inputElement.type == PASSWORD_TYPE ? TEXT_TYPE : PASSWORD_TYPE;
    }

    onRegistrate(): void {
        this.registrationService.authorization(this.form.value).subscribe((data: null) => {
            this.router.navigate(['welcome']);
        });
    }
}

