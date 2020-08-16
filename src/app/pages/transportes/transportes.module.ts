import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransportesRoutingModule } from './transportes-routing.module';
import { TransportesComponent } from './components/transportes/transportes.component';


@NgModule({
  declarations: [TransportesComponent],
  imports: [
    CommonModule,
    TransportesRoutingModule
  ]
})
export class TransportesModule { }
