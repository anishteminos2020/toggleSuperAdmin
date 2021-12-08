import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientUserRoleMgmtRoutingModule } from './client-user-role-mgmt-routing.module';
import { ClientAddRoleComponent } from './client-add-role/client-add-role.component';
import { ClientAddUsersComponent } from './client-add-users/client-add-users.component';
import { ClientListComponent } from './client-list/client-list.component';


@NgModule({
  declarations: [ClientAddRoleComponent, ClientAddUsersComponent, ClientListComponent],
  imports: [
    CommonModule,
    ClientUserRoleMgmtRoutingModule
  ]
})
export class ClientUserRoleMgmtModule { }
