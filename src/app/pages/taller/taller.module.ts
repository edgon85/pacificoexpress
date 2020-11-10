import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TallerRoutingModule } from './taller-routing.module';
import { TallerComponent } from './components/taller/taller.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [TallerComponent],
  imports: [
    CommonModule,
    TallerRoutingModule,
    SharedModule
  ]
})
export class TallerModule { }
