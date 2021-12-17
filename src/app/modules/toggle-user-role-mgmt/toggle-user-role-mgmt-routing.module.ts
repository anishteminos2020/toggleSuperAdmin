import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RollManagementComponent } from "./roll-management/roll-management.component";
import { ToggleUserRoleMgmtComponent } from "./toggle-user-role-mgmt/toggle-user-role-mgmt.component";
import { UserManagementComponent } from "./user-management/user-management.component";
import { AddNewUserComponent } from "./add-new-user/add-new-user.component";

const routes: Routes = [
  {
    path: "",
    component: ToggleUserRoleMgmtComponent,
    children: [
      { path: "roll-management", component: RollManagementComponent },
      { path: "user-management", component: UserManagementComponent },
      { path: "add-new-user", component: AddNewUserComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToggleUserRoleMgmtRoutingModule {}
