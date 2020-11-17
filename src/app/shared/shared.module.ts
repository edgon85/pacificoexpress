import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BannerComponent } from './components/banner/banner.component';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NoImagePipe } from '../pipes/no-image.pipe';
import { LoadingComponent } from './components/loading/loading.component';
import { CotizadorVehiculosComponent } from './components/cotizador-vehiculos/cotizador-vehiculos.component';
import { CotizadorTallerComponent } from './components/cotizador-taller/cotizador-taller.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProgrameCitaComponent } from './components/programe-cita/programe-cita.component';
import { CapitalizadoPipe } from '../pipes/capitalizado.pipe';
import { BannerAliadosComponent } from './components/banner-aliados/banner-aliados.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    SidebarComponent,
    NoImagePipe,
    LoadingComponent,
    CotizadorVehiculosComponent,
    CotizadorTallerComponent,
    ProgrameCitaComponent,
    CapitalizadoPipe,
    BannerAliadosComponent,
  ],
  imports: [RouterModule, CommonModule, FormsModule, ReactiveFormsModule],
  exports: [
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    SidebarComponent,
    NoImagePipe,
    LoadingComponent,
    CotizadorVehiculosComponent,
    CotizadorTallerComponent,
    ProgrameCitaComponent,
    CapitalizadoPipe,
    BannerAliadosComponent,
  ],
})
export class SharedModule {}
