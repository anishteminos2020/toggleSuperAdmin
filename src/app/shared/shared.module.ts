import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { FrameComponent } from './components/frame/frame.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    FrameComponent,
    SidebarComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [NavbarComponent, FooterComponent, FrameComponent, SidebarComponent],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [],
    };
  }
}
