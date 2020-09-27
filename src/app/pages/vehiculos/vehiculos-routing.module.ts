import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VehiculosComponent } from './components/vehiculos/vehiculos.component';
import { VehiculosLayoutComponent } from './components/vehiculos-layout/vehiculos-layout.component';

const routes: Routes = [
  {
    path: '',
    component: VehiculosComponent,
    children: [
      { path: 'cabezales', component: VehiculosLayoutComponent },
      { path: 'furgones', component: VehiculosLayoutComponent },
      { path: 'plataformas', component: VehiculosLayoutComponent },
      { path: 'camiones', component: VehiculosLayoutComponent },
      { path: 'low-boys', component: VehiculosLayoutComponent },
      { path: 'porta-contenedores', component: VehiculosLayoutComponent },
      { path: 'cisternas', component: VehiculosLayoutComponent },
      { path: 'camiones-mezcladores', component: VehiculosLayoutComponent },
      { path: 'camion-de-volteo', component: VehiculosLayoutComponent },
      { path: 'furgones-refrigerados', component: VehiculosLayoutComponent },
      { path: 'montacargas', component: VehiculosLayoutComponent },
      { path: 'retroexcabadoras', component: VehiculosLayoutComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VehiculosRoutingModule {}
