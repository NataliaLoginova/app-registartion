import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {WelcomePageComponent} from "./welcome-page/welcome-page.component";
import {routing} from "../welcome/welcome-routing.module";



@NgModule({
  declarations: [WelcomePageComponent],
  imports: [
    CommonModule,
    routing,
  ]
})
export class WelcomeModule { }
