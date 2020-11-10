import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GpsRoutingModule } from './gps-routing.module';
import { GpsComponent } from './components/gps/gps.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [GpsComponent],
  imports: [
    CommonModule,
    GpsRoutingModule,
    SharedModule
  ]
})
export class GpsModule { }
