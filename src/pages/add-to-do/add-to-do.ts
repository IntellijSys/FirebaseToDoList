import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';

import { TaskItem } from '../../models/task-item/task-item.interface';

@Component({
  selector: 'page-add-to-do',
  templateUrl: 'add-to-do.html',
})
export class AddToDoPage {

  taskItem = {} as TaskItem;
  taskItemRef$: FirebaseListObservable<TaskItem[]> 

  constructor(public navCtrl: NavController, public navParams: NavParams, private database: AngularFireDatabase) {
  	this.taskItemRef$ = this.database.list('task-list');
  }

  addTaskItem(taskItem: TaskItem) {

    this.taskItemRef$.push({
    	taskName: this.taskItem.taskName,
    	taskDescription: this.taskItem.taskDescription
    });

    this.taskItem = {} as TaskItem;

    this.navCtrl.pop();
  }

}
