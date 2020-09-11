import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BannerComponent } from './components/banner/banner.component';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    SidebarComponent,
  ],
  imports: [RouterModule, CommonModule],
  exports: [
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    SidebarComponent,
  ],
})
export class SharedModule {}
