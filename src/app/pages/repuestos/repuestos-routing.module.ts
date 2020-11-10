import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RepuestosDetailComponent } from './components/repuestos-detail/repuestos-detail.component';
import { RepuestosComponent } from './components/repuestos/repuestos.component';

const routes: Routes = [
  {
    path: '',
    component: RepuestosComponent,
  },
  {
    path: ':id',
    component: RepuestosDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RepuestosRoutingModule {}
