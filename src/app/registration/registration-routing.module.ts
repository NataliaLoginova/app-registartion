import {ModuleWithProviders, NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {RegistrationPageComponent} from "./regisration-page/registration-page.component";

const routes: Routes = [{path: '', component: RegistrationPageComponent}]

export const routing: ModuleWithProviders<RouterModule> = RouterModule.forChild(routes);
