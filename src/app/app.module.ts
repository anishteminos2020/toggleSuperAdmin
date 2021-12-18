import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { ToggleUserRoleMgmtModule } from './modules/toggle-user-role-mgmt/toggle-user-role-mgmt.module';
import { MasterModule } from './modules/master/master.module';
import { CustomerOrAccountMgmtModule } from './modules/customer-or-account-mgmt/customer-or-account-mgmt.module';
import { SharedModule } from './shared/shared.module';
import { ClientUserRoleMgmtModule } from './modules/client-user-role-mgmt/client-user-role-mgmt.module';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardModule,
    ToggleUserRoleMgmtModule,
    ClientUserRoleMgmtModule,
    MasterModule,
    CustomerOrAccountMgmtModule,
    SharedModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
