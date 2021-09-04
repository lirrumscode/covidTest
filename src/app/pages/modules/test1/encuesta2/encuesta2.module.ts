import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Encuesta2PageRoutingModule } from './encuesta2-routing.module';

import { Encuesta2Page } from './encuesta2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Encuesta2PageRoutingModule
  ],
  declarations: [Encuesta2Page]
})
export class Encuesta2PageModule {}
