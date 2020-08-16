import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { MainLayoutComponent } from './main-layout/main-layout.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'cotizador',
        loadChildren: () =>
          import('./pages/cotizador/cotizador.module').then(
            (m) => m.CotizadorModule
          ),
      },
      {
        path: 'gps',
        loadChildren: () =>
          import('./pages/gps/gps.module').then((m) => m.GpsModule),
      },
      {
        path: 'inicio',
        loadChildren: () =>
          import('./pages/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'repuestos',
        loadChildren: () =>
          import('./pages/repuestos/repuestos.module').then(
            (m) => m.RepuestosModule
          ),
      },
      {
        path: 'taller',
        loadChildren: () =>
          import('./pages/taller/taller.module').then((m) => m.TallerModule),
      },
      {
        path: 'transportes',
        loadChildren: () =>
          import('./pages/transportes/transportes.module').then(
            (m) => m.TransportesModule
          ),
      },
      {
        path: 'vehiculos',
        loadChildren: () =>
          import('./pages/vehiculos/vehiculos.module').then(
            (m) => m.VehiculosModule
          ),
      },
      { path: '', redirectTo: '/inicio', pathMatch: 'full' },
    ],
  },
  {
    path: 'admin',
    // canActivate: [AdminGuard],
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: '**',
    loadChildren: () =>
      import('./page-not-found/page-not-found.module').then(
        (m) => m.PageNotFoundModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      scrollPositionRestoration: 'enabled',
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
