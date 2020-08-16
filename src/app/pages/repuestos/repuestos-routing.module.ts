import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RepuestosComponent } from './components/repuestos/repuestos.component';

const routes: Routes = [
  {
    path: '',
    component: RepuestosComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RepuestosRoutingModule {}
