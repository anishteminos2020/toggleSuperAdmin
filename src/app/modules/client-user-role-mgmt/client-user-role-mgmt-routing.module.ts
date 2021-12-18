import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientUserRoleMgmtComponent } from './client-user-role-mgmt/client-user-role-mgmt.component';
import { ClientAddUsersComponent } from './client-add-users/client-add-users.component';
import { ClientAddRoleComponent } from './client-add-role/client-add-role.component';


const routes: Routes = [
  {
    path: "",
    component: ClientUserRoleMgmtComponent,
    children: [
      { path: "client-add-users", component: ClientAddUsersComponent },
      { path: "client-add-role", component: ClientAddRoleComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientUserRoleMgmtRoutingModule { }
