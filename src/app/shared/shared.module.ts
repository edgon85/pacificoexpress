import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BannerComponent } from './components/banner/banner.component';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NoImagePipe } from '../pipes/no-image.pipe';
import { LoadingComponent } from './components/loading/loading.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    SidebarComponent,
    NoImagePipe,
    LoadingComponent
  ],
  imports: [RouterModule, CommonModule],
  exports: [
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    SidebarComponent,
    NoImagePipe,
    LoadingComponent
  ],
})
export class SharedModule {}
