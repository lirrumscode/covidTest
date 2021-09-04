import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Encuesta2Page } from './encuesta2.page';

const routes: Routes = [
  {
    path: '',
    component: Encuesta2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Encuesta2PageRoutingModule {}
