import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TallerComponent } from './components/taller/taller.component';

const routes: Routes = [
  {
    path: '',
    component: TallerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TallerRoutingModule {}
