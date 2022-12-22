import {ModuleWithProviders, NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {DashboardPageComponent} from "./dashboard-page/dashboard-page.component";

const routes: Routes = [{path: '', component: DashboardPageComponent}]

export const routing: ModuleWithProviders<RouterModule> = RouterModule.forChild(routes);
