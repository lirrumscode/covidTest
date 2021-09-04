import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Encuesta1Page } from './encuesta1.page';

const routes: Routes = [
  {
    path: '',
    component: Encuesta1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Encuesta1PageRoutingModule {}
