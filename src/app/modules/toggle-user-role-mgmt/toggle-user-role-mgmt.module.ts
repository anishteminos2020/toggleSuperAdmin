import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RollManagementComponent } from './roll-management/roll-management.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { ToggleUserRoleMgmtRoutingModule } from './toggle-user-role-mgmt-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { ToggleUserRoleMgmtComponent } from './toggle-user-role-mgmt/toggle-user-role-mgmt.component';

@NgModule({
  declarations: [
    RollManagementComponent,
    UserManagementComponent,
    ToggleUserRoleMgmtComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    ToggleUserRoleMgmtRoutingModule,
  ],
})
export class ToggleUserRoleMgmtModule {}
