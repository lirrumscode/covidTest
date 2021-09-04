import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Encuesta3PageRoutingModule } from './encuesta3-routing.module';

import { Encuesta3Page } from './encuesta3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Encuesta3PageRoutingModule
  ],
  declarations: [Encuesta3Page]
})
export class Encuesta3PageModule {}
