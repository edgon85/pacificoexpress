import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TallerRoutingModule } from './taller-routing.module';
import { TallerComponent } from './components/taller/taller.component';


@NgModule({
  declarations: [TallerComponent],
  imports: [
    CommonModule,
    TallerRoutingModule
  ]
})
export class TallerModule { }
