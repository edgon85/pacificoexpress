import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BannerComponent } from './components/banner/banner.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, BannerComponent],
  imports: [RouterModule, CommonModule],
  exports: [HeaderComponent, FooterComponent, BannerComponent],
})
export class SharedModule {}
