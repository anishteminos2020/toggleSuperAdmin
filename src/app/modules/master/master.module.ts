import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterComponent } from './master/master.component';
import { CreateModuleComponent } from './create-module/create-module.component';
import { CreatePermissionComponent } from './create-permission/create-permission.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { MasterRoutingModule } from './master-routing.module';



@NgModule({
  declarations: [
    CreateModuleComponent,
    CreatePermissionComponent,
    MasterComponent,
  ],
  imports: [CommonModule, SharedModule, RouterModule, MasterRoutingModule],
})
export class MasterModule {}
