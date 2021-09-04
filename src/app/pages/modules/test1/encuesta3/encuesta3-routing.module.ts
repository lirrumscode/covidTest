import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Encuesta3Page } from './encuesta3.page';

const routes: Routes = [
  {
    path: '',
    component: Encuesta3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Encuesta3PageRoutingModule {}
