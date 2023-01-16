import {ModuleWithProviders} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {WelcomePageComponent} from "./welcome-page/welcome-page.component";

const routes: Routes = [{path: '', component: WelcomePageComponent}]

export const routing: ModuleWithProviders<RouterModule> = RouterModule.forChild(routes);
