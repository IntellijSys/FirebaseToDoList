import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditToDoItemPage } from './edit-to-do-item';

@NgModule({
  declarations: [
    EditToDoItemPage,
  ],
  imports: [
    IonicPageModule.forChild(EditToDoItemPage),
  ],
})
export class EditToDoItemPageModule {}
