import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfcovidPage } from './infcovid.page';

const routes: Routes = [
  {
    path: '',
    component: InfcovidPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfcovidPageRoutingModule {}
