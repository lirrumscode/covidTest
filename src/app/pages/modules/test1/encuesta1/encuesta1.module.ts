import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Encuesta1PageRoutingModule } from './encuesta1-routing.module';

import { Encuesta1Page } from './encuesta1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Encuesta1PageRoutingModule
  ],
  declarations: [Encuesta1Page]
})
export class Encuesta1PageModule {}
