import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CongressistaPage } from './congressista';

@NgModule({
  declarations: [
    CongressistaPage,
  ],
  imports: [
    IonicPageModule.forChild(CongressistaPage),
  ],
})
export class CongressistaPageModule {}
