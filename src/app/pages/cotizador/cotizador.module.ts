import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CotizadorRoutingModule } from './cotizador-routing.module';
import { CotizadorComponent } from './components/cotizador/cotizador.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [CotizadorComponent],
  imports: [CommonModule, CotizadorRoutingModule, SharedModule],
})
export class CotizadorModule {}
