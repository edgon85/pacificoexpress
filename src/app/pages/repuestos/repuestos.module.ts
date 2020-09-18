import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RepuestosRoutingModule } from './repuestos-routing.module';
import { RepuestosComponent } from './components/repuestos/repuestos.component';
import { SharedModule } from '../../shared/shared.module';
import { RepuestosDetailComponent } from './components/repuestos-detail/repuestos-detail.component';

@NgModule({
  declarations: [RepuestosComponent, RepuestosDetailComponent],
  imports: [CommonModule, RepuestosRoutingModule, SharedModule],
})
export class RepuestosModule {}
