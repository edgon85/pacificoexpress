import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransportesRoutingModule } from './transportes-routing.module';
import { TransportesComponent } from './components/transportes/transportes.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [TransportesComponent],
  imports: [
    CommonModule,
    TransportesRoutingModule,
    SharedModule
  ]
})
export class TransportesModule { }
