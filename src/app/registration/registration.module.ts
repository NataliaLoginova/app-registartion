import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RegistrationPageComponent} from "./regisration-page/registration-page.component";
import {routing} from "./registration-routing.module";
import {ReactiveFormsModule} from "@angular/forms";
import {FirstErrorMessagePipe} from "./pipes/first-error-message.pipe";



@NgModule({
  declarations: [RegistrationPageComponent, FirstErrorMessagePipe],
  imports: [
    CommonModule,
    routing,
    ReactiveFormsModule
  ]
})
export class RegistrationModule { }
