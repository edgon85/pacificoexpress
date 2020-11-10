import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransportesComponent } from './components/transportes/transportes.component';

const routes: Routes = [
  {
    path: '',
    component: TransportesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransportesRoutingModule {}
