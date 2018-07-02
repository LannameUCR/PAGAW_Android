import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditParametersPage } from './edit-parameters';

@NgModule({
  declarations: [
    EditParametersPage,
  ],
  imports: [
    IonicPageModule.forChild(EditParametersPage),
  ],
})
export class EditParametersPageModule {}
