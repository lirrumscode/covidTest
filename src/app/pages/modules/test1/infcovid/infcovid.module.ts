import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfcovidPageRoutingModule } from './infcovid-routing.module';

import { InfcovidPage } from './infcovid.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfcovidPageRoutingModule
  ],
  declarations: [InfcovidPage]
})
export class InfcovidPageModule {}
