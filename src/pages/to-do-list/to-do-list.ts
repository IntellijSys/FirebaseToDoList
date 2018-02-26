import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { AddToDoPage } from '../add-to-do/add-to-do';
import { EditToDoItemPage } from '../edit-to-do-item/edit-to-do-item';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';

import { TaskItem } from '../../models/task-item/task-item.interface';

@Component({
  selector: 'page-to-do-list',
  templateUrl: 'to-do-list.html',
})
export class ToDoListPage {

  taskListRef$: FirebaseListObservable<TaskItem[]>

  constructor(public navCtrl: NavController, public navParams: NavParams, private database: AngularFireDatabase, private actionSheetCtrl: ActionSheetController) {
  	this.taskListRef$ = this.database.list('task-list');
  }

  selectTaskItem(taskItem: TaskItem){
    console.log(taskItem.taskName);
  	this.actionSheetCtrl.create({
  		title: taskItem.taskName,
  		buttons: [
  			{
  				text: 'Edit',
  				handler:() => {
            this.navCtrl.push(EditToDoItemPage, {
              taskItemId: taskItem.$key
            });
  				}
  			},
  			{
  				text: 'Delete',
  				role: 'destructive',
  				handler:() => {
  					this.taskListRef$.remove(taskItem.$key);
  				}
  			},
  			{
  				text: 'Cancel',
  				role: 'cancel',
  				handler:() => {
  					console.log("The user has selected the cancel button");
  				}
  			}
  		]
  	}).present();

  }

  navigateToAddToDoPage(){
  	this.navCtrl.push(AddToDoPage);
  }

}