import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RepuestosRoutingModule } from './repuestos-routing.module';
import { RepuestosComponent } from './components/repuestos/repuestos.component';


@NgModule({
  declarations: [RepuestosComponent],
  imports: [
    CommonModule,
    RepuestosRoutingModule
  ]
})
export class RepuestosModule { }
