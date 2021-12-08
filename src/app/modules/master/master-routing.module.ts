import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MasterComponent } from "./master/master.component";
import { CreateModuleComponent } from "./create-module/create-module.component";
import { CreatePermissionComponent } from "./create-permission/create-permission.component";
const routes: Routes = [
  {
    path: '',
    component: MasterComponent,
    children: [
      { path: 'create-module', component: CreateModuleComponent },
      { path: 'create-permission', component: CreatePermissionComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MasterRoutingModule {}
