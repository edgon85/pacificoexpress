import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehiculosRoutingModule } from './vehiculos-routing.module';
import { VehiculosComponent } from './components/vehiculos/vehiculos.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [VehiculosComponent],
  imports: [
    CommonModule,
    VehiculosRoutingModule,
    SharedModule
  ]
})
export class VehiculosModule { }
