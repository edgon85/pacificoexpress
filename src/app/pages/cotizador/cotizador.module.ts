import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CotizadorRoutingModule } from './cotizador-routing.module';
import { CotizadorComponent } from './components/cotizador/cotizador.component';


@NgModule({
  declarations: [CotizadorComponent],
  imports: [
    CommonModule,
    CotizadorRoutingModule
  ]
})
export class CotizadorModule { }
