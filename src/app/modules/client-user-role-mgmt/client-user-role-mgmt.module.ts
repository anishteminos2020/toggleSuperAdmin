import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientUserRoleMgmtRoutingModule } from './client-user-role-mgmt-routing.module';
import { ClientAddRoleComponent } from './client-add-role/client-add-role.component';
import { ClientAddUsersComponent } from './client-add-users/client-add-users.component';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientUserRoleMgmtComponent } from './client-user-role-mgmt/client-user-role-mgmt.component';
import { SharedModule } from "src/app/shared/shared.module";
import { RouterModule } from "@angular/router";


@NgModule({
  declarations: [
    ClientAddRoleComponent,
    ClientAddUsersComponent,
    ClientListComponent,
    ClientUserRoleMgmtComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    ClientUserRoleMgmtRoutingModule,
  ],
})
export class ClientUserRoleMgmtModule {}
